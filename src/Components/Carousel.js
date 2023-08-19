import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import item1 from '../images/itam1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [item1, item2, item3, item4];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div id="default-carousel" className="relative w-full mx-auto h-72 md:h-96">
            {/* Carousel wrapper */}
            <div className="relative h-full overflow-hidden lg:p-64">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`duration-100 ${index === activeIndex ? 'active' : ''
                            } absolute w-full h-full top-0 left-0 transition-opacity`}
                        data-carousel-item
                        style={{ opacity: index === activeIndex ? 1 : 0 }}
                    >
                        <img
                            src={item}
                            className="object-cover w-full h-full"
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                ))}
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:my-64 ">
                <p className="text-white text-center text-xl md:text-5xl font-bold mb-4 p-8 z-10">
                    Find Your Perfect Table: Dine Discover <br /> Your Food Adventure Partner
                </p>
                <div className=" space-x-4 z-10">
                    <Link
                        to="/SignUp"
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg text-lg font-bold hover:bg-teal-900"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/Login"
                        className="px-6 py-2 border-solid   border-4 border-teal-600  text-white rounded-lg font-bold text-lg hover:bg-teal-600"
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Slider indicators */}
        </div>
    );
};

export default Carousel;
