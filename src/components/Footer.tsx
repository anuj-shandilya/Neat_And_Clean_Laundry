import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">About Neat & Clean</h3>
                        <p className="text-gray-300 mb-4">
                            Professional laundry services delivering exceptional quality and care for your garments.
                            Trust us with your clothes, and experience the difference of premium laundry service.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-[#48C9B0] hover:text-white transition-colors duration-300"
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Services', 'Location', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-[#48C9B0] transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-[#48C9B0]" />
                                <span className="text-gray-300">AG Colony, Patna</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-[#48C9B0]" />
                                <span className="text-gray-300">+91 9430557260 </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-[#48C9B0]" />
                                <span className="text-gray-300">info@neatclean.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} Neat & Clean Laundry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
