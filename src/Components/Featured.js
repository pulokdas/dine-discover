import React from 'react'
import featureicon from '../images/feature-icon-1.png'
import featureicon2 from '../images/feature-icon-2.png'
import featureicon3 from '../images/feature-icon-3.png'
import whychoose from '../images/why-choose-img.png'
export default function Featured() {
    return (
        <div className="my-40">
            <div className="container mx-auto px-4">
                {/* Other sections and content */}

                {/* What is Dine Discover Section */}
                <section className="py-10 bg-white">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">What is Dine Discover?</h2>
                        <p className="text-lg text-gray-600">Your Ultimate Restaurant Discovery Platform</p>
                    </div>
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src={featureicon} alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4">
                            <h3 className="text-xl font-bold mb-2">Explore a World of Restaurants</h3>
                            <p className="text-gray-600">
                                With Dine Discover, you can browse through a vast collection of restaurants, cafes, and eateries. From local hidden gems to famous international cuisines, we've got you covered.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src={featureicon2} alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4 ">
                            <h3 className="text-xl font-bold mb-2 ">Personalized Recommendations</h3>
                            <p className="text-gray-600">
                                Our smart recommendation engine learns your preferences and suggests restaurants tailored to your taste. Say goodbye to endless scrolling and find your perfect dining spot in no time.
                            </p>
                        </div>


                        {/* Feature 3 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src={featureicon3} alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4">
                            <h3 className="text-xl font-bold mb-2">Verified Reviews & Ratings</h3>
                            <p className="text-gray-600">
                                Make informed decisions with honest reviews and ratings from our community of diners. Join the conversation by sharing your own experiences and helping others discover hidden gems.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Dine Discover Section */}
                <section className="py-10 bg-white">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Why Choose Dine Discover?</h2>
                        <p className="text-lg text-gray-600">Your Journey to Memorable Dining Experiences</p>
                    </div>
                    {/* Features */}
                    <div className="flex flex-col md:flex-row lg:flex-row items-center  justify-around mt-4">
                        <div className="w-1/2">
                            <h3 className="text-xl font-bold mb-2">Discover Hidden Gems</h3>
                            <p className="text-gray-600">
                                We uncover lesser-known restaurants that offer exceptional dining experiences. Whether it's a cozy family-run cafe or a trendy fusion eatery, Dine Discover takes you off the beaten path.
                            </p>
                            <h3 className="text-xl font-bold mb-2 mt-6">Convenient Reservations</h3>
                            <p className="text-gray-600">
                                Easily book a table at your favorite restaurant right from the app. No more waiting on hold or struggling to get a reservation during peak hours.
                            </p>
                        </div>
                        {/* Add your image here */}
                        <div className="flex items-center justify-center">
                            <img src={whychoose} alt="Why Choose Dine Discover" className="w-96 h-96 rounded-lg" />
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a href="/SignUp.js" className="px-6 py-3 bg-teal-600 hover:bg-teal-900 text-white rounded-lg font-medium hover:bg-blue-700">Join Dine Discover Now</a>
                    </div>
                </section>
            </div>
        </div>
    )
}
