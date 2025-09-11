import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
    rating: number;
    text: string;
    name: string;
    location: string;
    isVisible: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, text, name, location, isVisible }) => {
    return (
        <div className={`transition-opacity duration-1000 absolute w-full ${isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="bg-[#48C9B0]/5 p-8 rounded-2xl">
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-6 h-6 ${i < rating ? 'fill-[#48C9B0] text-[#48C9B0]' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
                <p className="text-gray-700 text-lg text-center mb-6 italic">"{text}"</p>
                <div className="text-center">
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
