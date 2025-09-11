import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${isSelected ? 'scale-105 ring-2 ring-[#48C9B0] shadow-xl' : ''} group`}
        >
            <div className={`text-[#48C9B0] mb-4 transform transition-transform duration-300
        ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
                {icon}
            </div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300
        ${isSelected ? 'text-[#48C9B0]' : 'group-hover:text-[#48C9B0]'}`}>
                {title}
            </h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
