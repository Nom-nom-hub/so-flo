import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      message: data.message,
      submittedAt: new Date().toLocaleString(),
    };

    console.log("=== NEW QUOTE REQUEST ===");
    console.log(formData);
    console.log("=======================");

    // Send SMS notification via Twilio
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const recipientPhone = process.env.RECIPIENT_PHONE;

    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber && recipientPhone) {
      const smsMessage = `New Quote Request from ${data.name}!
      
Phone: ${data.phone || "Not provided"}
Email: ${data.email}
Message: ${data.message.substring(0, 100)}${data.message.length > 100 ? "..." : ""}`;

      const twilioResponse = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString("base64")}`,
          },
          body: new URLSearchParams({
            To: recipientPhone,
            From: twilioPhoneNumber,
            Body: smsMessage,
          }),
        }
      );

      if (!twilioResponse.ok) {
        const error = await twilioResponse.text();
        console.error("Twilio error:", error);
      } else {
        console.log("SMS sent successfully");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}