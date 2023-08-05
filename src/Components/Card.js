import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
            <Link to="">
                <Carousel infiniteLoop rounded showArrows={false} autoPlay={true} interval={3000} showThumbs={false}>
                    <div>
                        <img src={props.img1} alt="product" />
                    </div>
                    <div>
                        <img src={props.img2} alt="product" />
                    </div>
                    <div>
                        <img src={props.img3} alt="product" />
                    </div>

                </Carousel>
            </Link>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between mt-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {props.CardTitle}
                    </span>

                </div>

                <div className="flex items-center mt-2.5 mb-5">
                    <div
                        className="flex items-center  w-4 h-4 text-yellow-300 mr-1">
                        <i class="fa-solid fa-star"></i>
                        <p className="text-black">Rating</p>
                        <span className="bg-teal-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            {props.Rating}
                        </span>
                    </div>
                    {/* Menu buttond */}


                </div>
                <div>
                    <div className="text-center flex">
                        <button
                            className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            type="button"
                            data-drawer-target="drawer-example"
                            data-drawer-show="drawer-example"
                            aria-controls="drawer-example"
                        >
                            Menu
                        </button>
                        <button
                            className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            type="button"
                            data-modal-target="defaultModal"
                            data-modal-toggle="defaultModal"
                            aria-controls="drawer-example"
                        >
                            Location
                        </button>

                    </div>

                </div>

                <>


                    {/*location modal component */}
                    <>
                        {/* Modal toggle */}

                        {/* Main modal */}
                        <div
                            id="defaultModal"
                            tabIndex={-1}
                            aria-hidden="true"
                            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        >
                            <div className="relative w-full max-w-2xl max-h-full">
                                {/* Modal content */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* Modal header */}
                                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Location
                                        </h3>
                                        <button
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-hide="defaultModal"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="p-6 space-y-6">
                                        <h1>
                                            {props.location}
                                        </h1>
                                        <p >
                                            Phone: {props.mobile}
                                        </p>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button
                                            data-modal-hide="defaultModal"
                                            type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Go to Map
                                        </button>
                                        <button
                                            data-modal-hide="defaultModal"
                                            type="button"
                                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        >
                                            Call Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                    {/*Menu drawer component */}
                    <div
                        id="drawer-example"
                        className="fixed top-0 z-50 left-0  h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
                        tabIndex={-1}
                        aria-labelledby="drawer-label"
                    >
                        <h5
                            id="drawer-label"
                            className="inline-flex items-center mb-4 text-xl font-semibold text-gray-500 dark:text-gray-400"
                        >
                            <svg
                                className="w-4 h-4 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            Available Menu Items
                        </h5>
                        <button
                            type="button"
                            data-drawer-hide="drawer-example"
                            aria-controls="drawer-example"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close menu</span>
                        </button>

                        <div>
                            <img src={props.menu1} alt="" />
                            <img src={props.menu2} alt="" />
                            <img src={props.menu3} alt="" />
                        </div>


                    </div>
                </>


            </div>







        </div>
    );
};

export default Card;
