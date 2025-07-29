# Quick EmailJS Setup - Get Emails from Contact Form

## 🚀 **5-Minute Setup Guide**

### **Step 1: Sign Up for EmailJS**

1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (Free tier available)
3. Verify your email address

### **Step 2: Add Your Email Service**

1. In EmailJS dashboard → Click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Connect your Gmail account
5. **Copy the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name**: "Portfolio Contact Form"
4. **Subject**: `Portfolio Contact: {{subject}}`
5. **Content**:

```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form.
```

6. **Save** and copy the **Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Your Public Key**

1. Click **"Account"** in dashboard
2. Copy your **"Public Key"** (e.g., `user_abc123def456`)

### **Step 5: Update Your Environment Variables**

Replace the values in your `.env` file:

```bash
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

**Example:**

```bash
VITE_EMAILJS_PUBLIC_KEY=user_abc123def456
VITE_EMAILJS_SERVICE_ID=service_xyz789
VITE_EMAILJS_TEMPLATE_ID=template_abc123
```

### **Step 6: Test It!**

1. Fill out your contact form
2. Click "Send Message"
3. Check your email - you should receive the message!

## 📧 **What You'll Receive**

When someone fills your contact form, you'll get an email like this:

```
Subject: Portfolio Contact: Project Inquiry

Name: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi, I'd like to discuss a potential project with you...

---
Sent from your portfolio contact form.
```

## 🔧 **Troubleshooting**

**If emails aren't sending:**

1. Check browser console for errors
2. Verify all 3 environment variables are set correctly in `.env`
3. Make sure your email service is connected
4. Check your spam folder
5. Restart your development server after updating `.env`

**Environment Variables Not Working?**

- Make sure your `.env` file is in the project root
- Restart the development server after changing `.env`
- Check that variable names start with `VITE_`

## ✅ **You're Done!**

Once you update your `.env` file with your actual EmailJS credentials, your contact form will send you real emails whenever someone fills it out!

## 🔒 **Security Benefits**

Using environment variables:

- ✅ Keeps sensitive data out of your code
- ✅ Prevents accidental commits of credentials
- ✅ Makes it easy to use different values for development/production
- ✅ Follows security best practices
