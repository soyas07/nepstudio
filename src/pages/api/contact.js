import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message, phone, subject } = req.body;
    
        // Validate fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
    
        try {
          // Create a transporter
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
          });
    
          // Email content
          const mailOptions = {
            from: process.env.EMAIL_USER, // Your email to send from
            to: process.env.EMAIL_USER,   // Your email to receive messages
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}\nPhone: ${phone}`,
            replyTo: email, // Specify the sender's email for replies
          };
    
          // Send email
          await transporter.sendMail(mailOptions);

          // Reply options to respond to the sender in the same thread
          const replyOptions = {
            from: process.env.EMAIL_USER,  // Your email to send from
            to: email,                    // The sender's email address
            subject: `Re: New Contact Form Submission from ${name}`, // Keep the same subject for threading
            text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`,
          };

          // Send the reply to the sender
          await transporter.sendMail(replyOptions);

          return res.status(200).json({ success: "Email sent successfully!" });
        } catch (error) {
          return res.status(500).json({ error: "Failed to send email" });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}
