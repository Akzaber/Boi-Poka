import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded shadow-2xl" />
                <div className='space-y-12'>
                    <p className='text-6xl font-semibold'>
                        <h2 className='mb-6'>Books to Freshen up</h2>
                        <h2>Your Bookshelf</h2>
                    </p>
                    <button className="btn btn-lg btn-outline btn-neutral">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;