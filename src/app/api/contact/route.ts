import { NextResponse } from "next/server";

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
