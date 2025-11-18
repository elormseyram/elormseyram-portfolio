# EmailJS Setup Instructions

The contact form now uses EmailJS for reliable email delivery. Follow these steps to set it up:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month free)

## Step 2: Create Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider:
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - Or choose another provider
3. Follow the authentication steps
4. **Copy your Service ID** (you'll need this)

### ⚠️ Gmail Authentication Fix (If you see "insufficient authentication scopes" error):
If you get the error: `Gmail_API: Request had insufficient authentication scopes`

**Solution:**
1. **Disconnect** your current Gmail connection in EmailJS
2. **Reconnect** Gmail by clicking "Gmail Connect" again
3. **IMPORTANT**: When Google asks for permissions, make sure to:
   - Check the box: **"Allow 'Send email on your behalf' permission"**
   - Grant **ALL** requested permissions (don't skip any)
   - Complete the full OAuth flow
4. After reconnecting, try sending a test email again

**Alternative**: If Gmail continues to have issues, use **SMTP** instead:
1. Choose **SMTP** as your email service
2. Use these settings:
   - **SMTP Server**: `smtp.gmail.com`
   - **Port**: `587`
   - **Username**: Your Gmail address (seyramsenu22@gmail.com)
   - **Password**: Use an [App Password](https://myaccount.google.com/apppasswords) (not your regular password)
   - **Security**: TLS

## Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set **To Email** to: `elormseyram@theseas.tech`
3. Set **From Name** to: `{{from_name}}`
4. Set **Subject** to: `{{subject}}`
5. In the message body, use:
   ```
   From: {{from_name}} ({{from_email}})
   
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
6. **Copy your Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **Account** → **General** → **API Keys**
2. **Copy your Public Key**

## Step 5: Configure in Your Project
1. Create a `.env` file in the root of your project
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace the placeholder values with your actual IDs and keys
4. Restart your development server

## Alternative: Quick Setup Without .env
If you prefer not to use environment variables, you can directly edit `src/pages/ContactPage.tsx` and replace:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at `elormseyram@theseas.tech`
4. You should receive the message instantly!

## Troubleshooting

### Gmail "Insufficient authentication scopes" Error
**Error**: `Gmail_API: Request had insufficient authentication scopes`

**Fix**:
1. Disconnect Gmail in EmailJS dashboard
2. Reconnect and grant ALL permissions (especially "Send email on your behalf")
3. Or switch to SMTP method (see Step 2 above)

### Not Receiving Emails
- Check your spam/junk folder
- Verify the "To Email" in your template is correct: `elormseyram@theseas.tech`
- Check EmailJS dashboard for delivery status

### Other Errors
- **"Email service not configured"**: Make sure you've added your credentials to `.env` or the code
- **"Invalid credentials"**: Double-check your Service ID, Template ID, and Public Key
- **Still having issues?**: 
  - Verify your email service is properly connected in EmailJS dashboard
  - Try using SMTP instead of Gmail API
  - Check EmailJS dashboard logs for detailed error messages

