import React from 'react'
import Navbar from '../components/Navbar.js'
import Announcement from '../components/Announcement.js'
import Slider from '../components/Slider.js'
import Categories from '../components/Categories.js'
import Products from '../components/Products.js'
import Newsletter from '../components/Newsletter.js'
import Footer from '../components/Footer.js'
import Register from './Register.js'
import Seller from '../components/Sellers/Sellers.js'
const Home = () => {
    return (
   <div>
         {/* <Announcement /> */}
         
        <Navbar />
        {/* <Slider /> */}
        <Seller />
        <Categories />
        <Products />
        <Newsletter />
        <Footer /> 
        <Register />
    </div>
    )
}

export default Home
