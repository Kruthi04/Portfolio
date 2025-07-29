// Simple contact form handler
// This can be deployed as a serverless function (Vercel, Netlify, etc.)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Nodemailer, or EmailJS
    // 2. Store the message in a database
    // 3. Send notifications

    // For now, we'll simulate sending an email
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // You can integrate with email services here:
    // - SendGrid: https://sendgrid.com/
    // - Nodemailer: https://nodemailer.com/
    // - EmailJS: https://www.emailjs.com/
    // - AWS SES: https://aws.amazon.com/ses/

    res.status(200).json({
      message: "Message sent successfully!",
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      message: "Failed to send message. Please try again.",
      success: false,
    });
  }
}
