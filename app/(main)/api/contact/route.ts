import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, hp } = body;

    const leadData = {
      businessId: process.env.NEXT_PUBLIC_BUSINESS_ID,
      firstName,
      lastName,
      email,
      company: company || undefined,
      source: "contact_form",
      hp,
    };

    const backendResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      },
    );

    const responseData = await backendResponse.json();

    if (!backendResponse.ok) {
      console.error("Lead API error:", responseData);
      return NextResponse.json(
        { error: "Failed to submit lead", details: responseData },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
