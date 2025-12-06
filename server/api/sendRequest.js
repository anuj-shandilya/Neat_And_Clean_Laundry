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
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(data));
            } catch (parseErr) {
                reject(parseErr);
            }
        });
        req.on('error', (err) => reject(err));
    });
} catch (err) {
    return res.status(400).json({ error: 'Invalid JSON body' });
}

const { name, email, service, pickupDateTime } = jsonBody;

if (!name || !email || !service || !pickupDateTime) {
    return res.status(400).json({ error: 'Missing required fields' });
}

try {
    // Verify transporter config before sending mail
    await new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                console.error('Transporter verification error:', error);
                reject(error);
            } else {
                resolve(success);
            }
        });
    });

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
        replyTo: email,
    };

    // Send emails sequentially with await
    await transporter.sendMail(mailOptionsToUser);
    await transporter.sendMail(mailOptionsToProvider);

    res.status(200).json({ message: 'Request email sent' });
} catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send email' });
}
