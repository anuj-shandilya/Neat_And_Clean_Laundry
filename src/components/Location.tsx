import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const serviceAreas = [
    "Vijay Nagar", "Nehru Nagar", "West Ram Krishna Nagar", "Kautilya Nagar",
    "Gulzarbagh", "Kidwaipur Postal Park", "Mahavir Nagar", "Purnendu Nagar",
    "Phulwari Sharif", "Ashokpuri", "Khajpura", "East Indira Nagar",
    "Lal Kothi", "Chajju Bagh", "Shitala Colony", "P C Colony",
    "Ranipur Khidki", "Deedarganj", "Lodipur", "Shastri Nagar",
    "North Sri Krishna Puri", "Patrakar Nagar", "Pirmuhani", "Golambar",
    "Ektapuram", "Dujra", "Pandooi Kothi", "Ranipur",
    "Sadhnapuri", "Veerchand Patel Road Area", "MLA Colony", "Indrapuri",
    "Shastri Nagar", "Sultanpur", "Keshri Nagar", "Tej Pratap Nagar",
    "Sankar Colony", "Kautilya Nagar", "Bakerganj", "Mainpura",
    "Bank Colony", "East Ram Krishna Nagar", "Ramkrishan Nagar", "Chriyantand",
    "Mithapur", "Rajbansi Nagar", "West Ashok Nagar", "Phulwari Sharif",
    "Sanjay Gandhi Nagar", "Hanuman Nagar", "Engineer's Colony", "Adarsh Nagar",
    "Ramkrishan Nagar", "Rukanpura"
];

const Location: React.FC = () => {
    const [showAllAreas, setShowAllAreas] = useState(false);
    const displayedAreas = showAllAreas ? serviceAreas : serviceAreas.slice(0, 8);

    return (
        <div id="location" className="bg-[#48C9B0] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Find Us</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p>AG Colony, Patna</p>
                        <p>Bihar, India</p>
                    </div>
                    <div className="text-center">
                        <Phone className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Contact</h3>
                        <p>+91 9304136010</p>
                        <p>info@neatclean.com</p>
                    </div>
                    <div className="text-center">
                        <Clock className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Hours</h3>
                        <p>Monday - Saturday</p>
                        <p>8:00 AM - 8:00 PM</p>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Service Areas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {displayedAreas.map((area, index) => (
                            <div key={index} className="text-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                <p className="text-white">{area}</p>
                            </div>
                        ))}
                    </div>
                    {serviceAreas.length > 8 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAllAreas(!showAllAreas)}
                                className="bg-white text-[#48C9B0] px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                            >
                                {showAllAreas ? 'Show Less' : 'View All Areas'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Location;
