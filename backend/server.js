import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

app.post('/api/send-request', async (req, res) => {
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
        to: 'anujshandilya3@gmail.com', // Service provider email
        subject: 'New Laundry Service Request',
        text: `${name} has requested the ${service} service for pickup on ${pickupDateTime}.\n\nContact info: ${name}, Email: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptionsToUser);
        await transporter.sendMail(mailOptionsToProvider);
        res.json({ message: 'Request email sent' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
