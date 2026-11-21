
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // ENVIRONMENT VARIABLES
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing email environment variables.");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // REQUEST BODY
    let body;

    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // TYPE VALIDATION
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    // CLEAN DATA
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    // REQUIRED FIELDS
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // LENGTH VALIDATION
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanMessage.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // RESEND CLIENT
    const resend = new Resend(apiKey);

    // SEND EMAIL
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: cleanEmail,
      subject: `New portfolio message from ${cleanName}`,
      text: `
Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMessage}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your message. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully!",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
