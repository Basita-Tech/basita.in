import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
};

function createTransporter() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP credentials missing (SMTP_USER / SMTP_PASS).");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 5000,
    greetingTimeout: 3000,
    socketTimeout: 5000,
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const { name, email, phone, company, service, message } = payload;

  const transporter = createTransporter();

  const adminEmail = process.env.EMAIL_TO || process.env.SMTP_USER!;
  const fromEmail = process.env.EMAIL_FROM || process.env.SMTP_USER!;

  const adminSubject = `New contact form submission from ${name}`;

  const adminText = `
New contact form submitted:

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company: ${company || "-"}
Service: ${service || "-"}

Message:
${message}
  `;

  const adminHtml = `
<h3>New contact form submitted</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || "-"}</p>
<p><strong>Company:</strong> ${company || "-"}</p>
<p><strong>Service:</strong> ${service || "-"}</p>
<hr />
<p>${message.replace(/\n/g, "<br>")}</p>
  `;

  await transporter.sendMail({
    from: fromEmail,
    to: adminEmail,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  if (email && email.includes("@")) {
    const replySubject = "Thank you for contacting Basita Technology";

    const replyText = `
Hello ${name},

Thank you for contacting Basita Technology.
We received your message and will get back to you shortly.

Best regards,
Basita Technology Team
    `;

    const replyHtml = `
<p>Hello ${name},</p>
<p>Thank you for contacting Basita Technology.<br>
We received your message and will get back to you shortly.</p>
<p>Best regards,<br>Basita Technology Team</p>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: replySubject,
      text: replyText,
      html: replyHtml,
    });
  }
}
