import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method === 'GET' && req.url === '/') {
        // Basic GET route to confirm backend is hosted
        return res.status(200).json({ message: 'backend hosted' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, service, pickupDateTime } = req.body;
    if (!name || !email || !service || !pickupDateTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptionsToUser = {
        from: `"Neat & Clean" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Your Laundry Service Request Confirmation',
        text: `Hi ${name},\n\nThank you for requesting the ${service} service. We will pick up your laundry on ${pickupDateTime}.\n\nRegards,\nNeat & Clean Laundry`,
    };

    const mailOptionsToProvider = {
        from: `"Neat & Clean" <${process.env.GMAIL_USER}>`,
        to: 'anujshandilya3@gmail.com',
        subject: 'New Laundry Service Request',
        text: `${name} has requested the ${service} service for pickup on ${pickupDateTime}.\n\nContact info: ${name}, Email: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptionsToUser);
        await transporter.sendMail(mailOptionsToProvider);
        res.status(200).json({ message: 'Request email sent' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
