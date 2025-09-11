import React, { useState } from 'react';
import { Shirt, Wind, Shapes as Shoes, Briefcase, Car as Carpet } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceRequestForm from './ServiceRequestForm';

type Service = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const services: Service[] = [
    {
        icon: <Shirt className="w-12 h-12" />,
        title: "Dry Cleaning",
        description: "Professional dry cleaning service for your delicate garments with special care and attention."
    },
    {
        icon: <Wind className="w-12 h-12" />,
        title: "Wash & Iron",
        description: "Complete washing and ironing service to keep your clothes fresh and crisp."
    },
    {
        icon: <Shoes className="w-12 h-12" />,
        title: "Shoe Laundry",
        description: "Specialized cleaning service for all types of shoes to maintain their appearance and durability."
    },
    {
        icon: <Briefcase className="w-12 h-12" />,
        title: "Luggage Laundry",
        description: "Deep cleaning service for bags, suitcases, and other travel accessories."
    },
    {
        icon: <Wind className="w-12 h-12" />,
        title: "Steam Iron",
        description: "Professional steam ironing service for wrinkle-free and perfectly pressed clothes."
    },
    {
        icon: <Carpet className="w-12 h-12" />,
        title: "Carpet Cleaning",
        description: "Deep cleaning service for carpets and rugs using advanced cleaning methods."
    }
];

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const [showForm, setShowForm] = useState(false);

    return (
        <div id="services" className="py-20 px-4 md:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service: Service, index: number) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        isSelected={selectedService === index}
                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                    />
                ))}
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-[#48C9B0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3BB39B] transition-all duration-300"
                >
                    {showForm ? 'Close Request Form' : 'Request a Service'}
                </button>
            </div>

            {showForm && <ServiceRequestForm />}
        </div>
    );
};

export default Services;
