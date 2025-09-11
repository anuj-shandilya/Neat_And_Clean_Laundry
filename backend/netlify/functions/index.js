import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export async function handler(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Allow': 'POST' },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const { name, email, service, pickupDateTime } = JSON.parse(event.body);

    if (!name || !email || !service || !pickupDateTime) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing required fields' }),
        };
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
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Request email sent' }),
        };
    } catch (error) {
        console.error('Error sending emails:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
}
