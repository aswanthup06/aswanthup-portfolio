import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["aswanthup06@gmail.com"],

      subject: `New message from ${name}`,

      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New Portfolio Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}