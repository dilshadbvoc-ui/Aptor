import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail({ to, subject, html, text }: EmailOptions) {
    try {
      const info = await this.transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Aptor Studies'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
        to,
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
      });

      console.log('Email sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error };
    }
  }

  async sendContactNotification(contactData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) {
    const adminEmail = process.env.ADMIN_EMAIL || 'info@aptorstudies.com';
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Contact Form Submission</h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${contactData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          This email was sent from the Aptor Studies contact form.
        </p>
      </div>
    `;

    return this.sendEmail({
      to: adminEmail,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html
    });
  }

  async sendContactConfirmation(userEmail: string, userName: string) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Thank you for contacting us!</h2>
        <p>Dear ${userName},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Our team at Aptor Studies is committed to helping you achieve your educational goals.</p>
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #0369a1;">
            <strong>What's next?</strong><br>
            Our education consultants will review your inquiry and contact you with personalized guidance.
          </p>
        </div>
        <p>Best regards,<br>The Aptor Studies Team</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          Aptor Studies - Your Gateway to World-Class Education<br>
          Email: info@aptorstudies.com | Website: aptorstudies.com
        </p>
      </div>
    `;

    return this.sendEmail({
      to: userEmail,
      subject: 'Thank you for contacting Aptor Studies',
      html
    });
  }

  async sendInternshipApplication(applicationData: {
    internshipTitle: string;
    applicantName: string;
    applicantEmail: string;
    resume?: string;
  }) {
    const adminEmail = process.env.ADMIN_EMAIL || 'info@aptorstudies.com';
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Internship Application</h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Internship:</strong> ${applicationData.internshipTitle}</p>
          <p><strong>Applicant:</strong> ${applicationData.applicantName}</p>
          <p><strong>Email:</strong> ${applicationData.applicantEmail}</p>
          ${applicationData.resume ? `<p><strong>Resume:</strong> Attached</p>` : ''}
        </div>
      </div>
    `;

    return this.sendEmail({
      to: adminEmail,
      subject: `New Internship Application: ${applicationData.internshipTitle}`,
      html
    });
  }
}

export const emailService = new EmailService();