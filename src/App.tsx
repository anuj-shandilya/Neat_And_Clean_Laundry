import React, { useState, useEffect } from 'react';
import { 
  Shirt, 
  Shapes as Shoes, 
  Briefcase, 
  Wind, 
  Car as Carpet, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Menu,
  X,
  Star,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [showAllAreas, setShowAllAreas] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const displayedAreas = showAllAreas ? serviceAreas : serviceAreas.slice(0, 8);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-[#D5DBDB] flex flex-col relative">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Neat & Clean
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`${
                isScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-[#48C9B0] transition-colors duration-300`}>Home</a>
              <a href="#services" className={`${
                isScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-[#48C9B0] transition-colors duration-300`}>Services</a>
              <a href="#location" className={`${
                isScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-[#48C9B0] transition-colors duration-300`}>Location</a>
              <button className="bg-[#48C9B0] text-white px-4 py-2 rounded-full hover:bg-[#3BB39B] transition-colors duration-300">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isScrolled ? 'text-gray-600' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#48C9B0] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#48C9B0] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#location" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#48C9B0] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Location
                </a>
                <button 
                  className="w-full text-left px-3 py-2 text-[#48C9B0] hover:text-[#3BB39B] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevImage}
          className="absolute left-4 z-10 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 z-10 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-white w-4' : 'bg-white/50'
              }`}
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

      {/* Services Section */}
      <div id="services" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${selectedService === index ? 'scale-105 ring-2 ring-[#48C9B0] shadow-xl' : ''}
                group`}
            >
              <div className={`text-[#48C9B0] mb-4 transform transition-transform duration-300
                ${selectedService === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300
                ${selectedService === index ? 'text-[#48C9B0]' : 'group-hover:text-[#48C9B0]'}`}>
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Customer Reviews</h2>
          <div className="relative h-[300px]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 absolute w-full ${
                  index === currentReview ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="bg-[#48C9B0]/5 p-8 rounded-2xl">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < review.rating ? 'fill-[#48C9B0] text-[#48C9B0]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg text-center mb-6 italic">"{review.text}"</p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-[#48C9B0]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
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

      {/* Footer */}
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
                <a href="#" className="text-[#48C9B0] hover:text-white transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#48C9B0] hover:text-white transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#48C9B0] hover:text-white transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#48C9B0] transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-[#48C9B0] transition-colors duration-300">Services</a>
                </li>
                <li>
                  <a href="#location" className="text-gray-300 hover:text-[#48C9B0] transition-colors duration-300">Location</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#48C9B0] transition-colors duration-300">Contact</a>
                </li>
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919304136010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

const carouselImages = [
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80"
];

const services = [
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

export default App;