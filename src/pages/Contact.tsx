import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Neat & Clean Laundry</title>
                <meta
                    name="description"
                    content="Contact Neat & Clean Laundry for professional laundry pickup and delivery services in Patna."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col items-center justify-center bg-[#D5DBDB] p-6">
                <h1 className="text-4xl font-bold mb-8 text-[#48C9B0]">Contact Us</h1>

                <p className="mb-6 text-center max-w-xl text-gray-700">
                    Have questions or want to schedule a pickup? Reach out to us via phone, email or WhatsApp.
                </p>

                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">Phone</h2>
                        <a href="tel:+919304136010" className="text-[#48C9B0] hover:underline">
                            +91 93041 36010
                        </a>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">Email</h2>
                        <a href="mailto:info@neatclean.com" className="text-[#48C9B0] hover:underline">
                            info@neatclean.com
                        </a>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-1">WhatsApp</h2>
                        <a
                            href="https://wa.me/919304136010"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#48C9B0] hover:underline"
                        >
                            Chat with us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
