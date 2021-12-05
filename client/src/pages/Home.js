import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Navbar/Announcement'
import Slider from '../Navbar/Slider'
import Categories from '../Navbar/Categories'
import Products from '../Navbar/Products'
import Newsletter from '../Navbar/Newsletter'
import Footer from '../Navbar/Footer'
import Register from './Register'
const Home = () => {
    return (
   <div>
         <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer /> 
        <Register />
    </div>
    )
}

export default Home
