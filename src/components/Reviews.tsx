import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        name: "Rahul Sharma",
        location: "Patna",
        rating: 5,
        text: "Exceptional service! My clothes have never been cleaner and the staff is very professional. The steam iron service is particularly impressive."
    },
    {
        name: "Priya Patel",
        location: "AG Colony",
        rating: 5,
        text: "I've been using their services for over a year now. The quality is consistent and their pickup/delivery is always on time."
    },
    {
        name: "Amit Kumar",
        location: "Boring Road",
        rating: 5,
        text: "Their carpet cleaning service transformed my old carpet. It looks brand new! Highly recommend their services."
    },
    {
        name: "Neha Singh",
        location: "Patna City",
        rating: 5,
        text: "The best laundry service in Patna! Their attention to detail and care for delicate fabrics is outstanding."
    }
];

const Reviews: React.FC = () => {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Customer Reviews</h2>
                <div className="relative h-[300px]">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            rating={review.rating}
                            text={review.text}
                            name={review.name}
                            location={review.location}
                            isVisible={index === currentReview}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8 space-x-2">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview ? 'bg-[#48C9B0]' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentReview(index)}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
