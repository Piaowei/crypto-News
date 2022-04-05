import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='md:px-16 py-8 bg-cyan-200'>
            <div className='flex flex-col justify-center h-[80vh] items-center '>
                <h1 className=' font-mono text-xl md:text-5xl '>
                    Welcome to CRYPTO NEWS<span className='text-6xl'>☕</span>
                </h1>
                <Link to='./coins' className='explore-btn py-2 px-5 text-white mt-3 rounded-full bg-cyan-600 '>
                    Explore Coins
                </Link>
            </div>
        </div>
    );
};

export default HomePage;