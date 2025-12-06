import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Code, Send } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-700">

                    {/* About Section */}
                    <div className="md:pr-12 pb-8 md:pb-0">
                        <h3 className="text-2xl font-bold mb-6 text-white">About Neat & Clean</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our professional team uses premium cleaning solutions and state-of-the-art equipment to ensure every garment receives meticulous attention. From everyday wear to delicate fabrics, we handle each item with expertise.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, label: 'Facebook', href: '#' },
                                { Icon: Instagram, label: 'Instagram', href: '#' },
                                { Icon: Twitter, label: 'Twitter', href: '#' }
                            ].map(({ Icon, label, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#48C9B0] hover:bg-[#48C9B0] hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="md:px-12 pt-8 md:pt-0 pb-8 md:pb-0">
                        <h3 className="text-2xl font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Dry Cleaning',
                                'Wash & Iron',
                                'Shoe Laundry',
                                'Premium Laundry',
                                'Express Cleaning',
                                'Free Pickup & Delivery'
                            ].map((service, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-gray-400 hover:text-[#48C9B0] transition-colors duration-300 cursor-pointer group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#48C9B0] group-hover:scale-150 transition-transform duration-300"></span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:pl-12 pt-8 md:pt-0">
                        <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="w-5 h-5 text-[#48C9B0] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-gray-400 leading-relaxed">
                                    AG Colony, Patna<br />
                                    Bihar, India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Phone className="w-5 h-5 text-[#48C9B0] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <a
                                    href="tel:+919430557260"
                                    className="text-gray-400 hover:text-[#48C9B0] transition-colors duration-300"
                                >
                                    +91 9430557260
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Mail className="w-5 h-5 text-[#48C9B0] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <a
                                    href="mailto:info@neatclean.com"
                                    className="text-gray-400 hover:text-[#48C9B0] transition-colors duration-300"
                                >
                                    info@neatclean.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Developer Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="flex items-center space-x-2">
                                <Code className="w-5 h-5 text-[#48C9B0]" />
                                <h4 className="text-lg font-semibold text-white">Website Developer</h4>
                            </div>

                            <p className="text-gray-400 text-sm">
                                Designed & Developed by <span className="text-[#48C9B0] font-medium">Anuj Shandilya</span>
                            </p>

                            <div className="flex items-center space-x-6">
                                <a
                                    href="mailto:anujshandilya3@gmail.com"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-[#48C9B0] transition-colors duration-300 group"
                                >
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    <span className="text-sm">anujshandilya3@gmail.com</span>
                                </a>

                                <a
                                    href="https://instagram.com/anuj.shandilya_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-[#48C9B0] transition-colors duration-300 group"
                                >
                                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-sm">@anuj.shandilya_</span>
                                </a>
                            </div>

                            <p className="text-gray-500 text-xs italic">
                                Need a stunning website? Let's build something amazing together!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright & Links */}
                <div className="border-t border-gray-800 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Neat & Clean Laundry. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-gray-400 hover:text-[#48C9B0] transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
