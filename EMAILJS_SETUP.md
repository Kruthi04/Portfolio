# EmailJS Setup Guide for Contact Form

## Overview

This guide will help you set up EmailJS to send emails when someone fills out your contact form. EmailJS is a client-side email service that doesn't require a backend server.

## Step 1: Create EmailJS Account

1. **Sign up**: Go to https://www.emailjs.com/ and create a free account
2. **Verify your email**: Check your inbox and verify your email address

## Step 2: Add Email Service

1. **Go to Email Services**: In your EmailJS dashboard, click "Email Services"
2. **Add New Service**: Click "Add New Service"
3. **Choose Provider**: Select your email provider (Gmail, Outlook, etc.)
4. **Connect Account**: Follow the authentication steps for your email provider
5. **Note the Service ID**: Copy the Service ID (e.g., `service_abc123`)

## Step 3: Create Email Template

1. **Go to Email Templates**: In your EmailJS dashboard, click "Email Templates"
2. **Create New Template**: Click "Create New Template"
3. **Template Content**: Use this template:

```html
Subject: Portfolio Contact: {{subject}} Name: {{from_name}} Email:
{{from_email}} Subject: {{subject}} Message: {{message}} --- This message was
sent from your portfolio contact form.
```

4. **Save Template**: Click "Save" and note the Template ID (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. **Go to Account**: In your EmailJS dashboard, click "Account"
2. **API Keys**: Find your "Public Key" and copy it

## Step 5: Update Your Code

Replace the placeholders in `src/components/portfolio/sections/Contact.tsx`:

```javascript
// Line 32: Replace with your EmailJS public key
window.emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

// Line 108: Replace with your EmailJS service ID
("YOUR_EMAILJS_SERVICE_ID");

// Line 109: Replace with your EmailJS template ID
("YOUR_EMAILJS_TEMPLATE_ID");
```

### Example:

```javascript
window.emailjs.init("user_abc123def456");
await window.emailjs.send("service_xyz789", "template_abc123", templateParams);
```

## Step 6: Test the Form

1. **Fill out the form**: Go to your portfolio and fill out the contact form
2. **Submit**: Click "Send Message"
3. **Check your email**: You should receive the email with the form details

## Alternative Options

### Option 2: Serverless Function (Vercel/Netlify)

If you prefer a serverless approach, you can use:

**For Vercel:**

```javascript
// api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Use a service like SendGrid, Nodemailer, or Resend
  // Example with Resend:
  const { Resend } = require("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "your-portfolio@yourdomain.com",
      to: "lhosaman@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
```

### Option 3: Custom Backend Server

**Using Express.js with Nodemailer:**

```javascript
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-app-password",
      },
    });

    const mailOptions = {
      from: email,
      to: "lhosaman@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
```

## Security Considerations

1. **Rate Limiting**: Implement rate limiting to prevent spam
2. **Input Validation**: Always validate inputs on both client and server
3. **CORS**: Configure CORS properly for API endpoints
4. **Environment Variables**: Store sensitive data in environment variables

## Troubleshooting

### Common Issues:

1. **EmailJS not loading**: Check if the script is loading properly
2. **Service ID error**: Verify your EmailJS service ID is correct
3. **Template ID error**: Verify your EmailJS template ID is correct
4. **Authentication issues**: Make sure your email service is properly connected

### Testing:

1. **Check browser console**: Look for any JavaScript errors
2. **Verify network requests**: Check if the EmailJS API calls are being made
3. **Test with different browsers**: Ensure cross-browser compatibility

## Next Steps

1. **Choose your preferred method**: EmailJS (easiest) or serverless/custom backend
2. **Set up the service**: Follow the setup steps above
3. **Test thoroughly**: Make sure emails are being sent correctly
4. **Deploy**: Deploy your portfolio with the working contact form

The contact form will now send you emails when someone fills it out!
