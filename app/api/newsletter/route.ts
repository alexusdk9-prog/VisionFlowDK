import { NextResponse } from "next/server"
import { Resend } from "resend"
export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

// Generate a unique discount code
function generateDiscountCode(): string {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const prefix = "VF15"
  let code = ""

  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return `${prefix}-${code}`
}

function getEmailHtml(discountCode: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-size: 28px; font-weight: bold; color: #0a0a0a; margin: 0 0 8px 0;">
            Vision Flow
          </h1>
          <p style="color: #6b7280; font-size: 14px; margin: 0;">Websites that move with purpose</p>
        </div>

        <div style="background-color: #f9fafb; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 32px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #0a0a0a; margin: 0 0 16px 0;">
            Welcome to the Vision Flow Newsletter!
          </h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
            Thank you for subscribing! As a token of our appreciation, here is your exclusive 15% discount code for your first project with us.
          </p>

          <div style="background-color: #2563eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #ffffff; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">
              Your Discount Code
            </p>
            <p style="color: #ffffff; font-size: 32px; font-weight: bold; letter-spacing: 2px; margin: 0;">
              ${discountCode}
            </p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Use this code when ordering any of our services to receive 15% off.
          </p>
        </div>

        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 18px; font-weight: bold; color: #0a0a0a; margin: 0 0 16px 0;">
            Our Services
          </h3>
          <ul style="color: #4b5563; font-size: 14px; line-height: 2; padding-left: 20px; margin: 0;">
            <li>Custom Website Development</li>
            <li>Landing Page Design</li>
            <li>Web Design & UI/UX</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">
            This code is unique to you and can only be used once.
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Best regards, Vision Flow Team
          </p>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Generate unique discount code
    const discountCode = generateDiscountCode()

    const { data, error } = await resend.emails.send({
      from: "Vision Flow <onboarding@resend.dev>",
      to: [email],
      subject: "Your 15% Discount Code from Vision Flow",
      html: getEmailHtml(discountCode),
    })

    if (error) {
      console.error("[Newsletter] Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Discount code sent to your email!",
    })
  } catch (error) {
    console.error("[Newsletter] Error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}
