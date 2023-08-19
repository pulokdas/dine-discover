import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Featured from './Featured'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <div>
            <Navbar home="Home" discover="Discover Now" />
            <Carousel />
            <Featured />
            <Footer />


        </div>

    )
}
