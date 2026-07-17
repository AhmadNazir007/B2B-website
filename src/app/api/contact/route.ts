import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide your name, email, and a short message.",
        },
        { status: 400 }
      );
    }

    // Ensure SMTP config exists
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const SMTP_SECURE = process.env.SMTP_SECURE !== "false"; // default true for 465
    const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      return NextResponse.json(
        {
          success: false,
          message:
            "SMTP is not configured. Set SMTP_USER, SMTP_PASS and CONTACT_TO env vars.",
        },
        { status: 500 }
      );
    }

    // create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailText = `New contact submission:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company ?? ""}\n\nMessage:\n${message}`;

    const mailHtml = `
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company ?? ""}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    try {
      await transporter.sendMail({
        from: `Ahmad Nazir<${SMTP_USER}>`,
        to: CONTACT_TO,
        replyTo: email,
        subject: `New contact from ${name} <${email}>`,
        text: mailText,
        html: mailHtml,
      });
    } catch (err) {
      // log error server-side
      // eslint-disable-next-line no-console
      console.error("Error sending contact email:", err);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. We will contact you shortly.",
      payload: {
        name,
        email,
        company: company ?? "",
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}
