import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/919304136010"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
};

export default WhatsAppButton;
