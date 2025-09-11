import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../components/Carousel/Carousel';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Location from '../components/Location';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Neat & Clean Laundry - Home</title>
                <meta
                    name="description"
                    content="Professional laundry and dry cleaning services in Patna. Reliable pickup and delivery by Neat & Clean Laundry."
                />
                <meta name="keywords" content="laundry, dry cleaning, Patna, services, washing, ironing" />
                <meta name="author" content="Neat & Clean Laundry" />
            </Helmet>

            <main className="bg-[#D5DBDB] flex flex-col">
                <Carousel />
                <Services />
                <Reviews />
                <Location />
            </main>
        </>
    );
};

export default Home;
