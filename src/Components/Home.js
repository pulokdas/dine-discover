import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import images from './Images';

import Footer from './Footer'
export default function home() {

    const scrollToTopRated = () => {
        const topRatedSection = document.getElementById('topRated');
        if (topRatedSection) {
            topRatedSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div  >
            <Navbar home="Home" discover="" profile="Your Profile" />

            <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Go through a Outstanding jaurney with <br /> <span className='text-teal-400'>Dine Discover</span></h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Savor new culinary experiences and explore diverse flavors with our curated guide to exceptional dining destinations.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button onClick={scrollToTopRated} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <a href="/Aboutus" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

            <section id="topRated" className='flex justify-center items-center'>
                <div className='w-11/12' >
                    <h1 className='text-3xl font-bold p-10 pl-0 '>Top Rated Resturents</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center  gap-10'>
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.pachvai} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Pach vai" Rating="4.9" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center'>
                <div className='w-11/12' >
                    <h1 className='text-3xl font-bold p-10 pl-0 '>Yours Favourouite</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10'>
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center'>
                <div className='w-11/12' >
                    <h1 className='text-3xl font-bold p-10 pl-0 '>Most visited</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10'>
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center'>
                <div className='w-11/12' >
                    <h1 className='text-3xl font-bold p-10 pl-0 '>Fans favourite</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10'>
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                        <Card img1={images.Pansi} img2={images.Pansi2} img3={images.Pansi3} CardTitle="Panshi Resturant" Rating="4.5" menu1={images.pansiMenu1} menu2={images.pansiMenu2} menu3={images.pansiMenu3} location="Jallarpar Rd,zindabazar Sylhet 3100" mobile=" 01761-152939" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
