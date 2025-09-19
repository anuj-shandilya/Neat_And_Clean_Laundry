import nodemailer from 'nodemailer';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // For development, use your frontend domain in production
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

async function handler(req, res) {
    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).set(corsHeaders).end();
    }

    // Set CORS headers for all other responses
    res.set(corsHeaders);

    if (req.method === 'GET' && req.url === '/') {
        return res.status(200).json({ message: 'backend hosted' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Manual JSON body parse
    let jsonBody;
    try {
        jsonBody = await new Promise((resolve, reject) => {
            let data = '';
            req.on('data', chunk => { data += chunk; });
            req.on('end', () => resolve(JSON.parse(data)));
            req.on('error', err => reject(err));
        });
    } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON body' });
    }

    const { name, email, service, pickupDateTime } = jsonBody;

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
};

export default handler;
