import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80"
];

const Carousel: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {carouselImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${image}")` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </div>
            ))}

            {/* Carousel Controls */}
            <button
                onClick={prevImage}
                className="absolute left-4 z-10 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 z-10 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            <div className="relative text-center text-white px-4 z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                    Neat and Clean Laundry
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                    Professional Laundry & Dry Cleaning Services
                </p>
                <a
                    href="#services"
                    className="bg-[#48C9B0] text-white px-8 py-3 rounded-full text-lg font-semibold 
            hover:bg-[#3BB39B] transition-all duration-300 inline-block"
                >
                    Our Services
                </a>
            </div>
        </div>
    );
};

export default Carousel;
