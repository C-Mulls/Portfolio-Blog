import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, note } = await req.json();

    if (!email || !note) {
      return Response.json({ message: 'Missing email or message.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use SMTP settings
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: 'New Contact Form Message',
      text: `From: ${email}\n\nMessage:\n${note}`,
    });

    return Response.json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    return Response.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
