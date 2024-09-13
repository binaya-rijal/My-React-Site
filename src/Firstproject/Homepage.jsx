import React from 'react';
import { Link } from 'react-router-dom';

function MyCard(props){
    return(
    <div className='mt-4 p-2 rounded-xl bg-green-500'>{props.children}</div>
    )
}

const HomePage = () => {
    return (
        <div className="bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-purple-600">MyWebsite</div>
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/service" className="text-gray-600 hover:text-blue-600 transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/ProductPage" className="text-gray-600 hover:text-blue-600 transition">
                                Products
                            </Link>
                        </li>

                    </ul>
                    <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="bg-purple-600 text-white text-center py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg mb-8">Your one-stop solution for all your needs.</p>
                    <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>


        </div>
    );
};

export default HomePage;