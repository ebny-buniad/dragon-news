import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto mt-5 flex items-center gap-5 bg-base-200 p-3 rounded-md'>
                <p className='bg-secondary text-white py-2 px-3'>Latest</p>
                <Marquee className='flex gap-5' pauseOnHover={true}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente facilis tempore eum dicta unde odit eveniet commodi rerum quia!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente facilis tempore eum dicta unde odit eveniet commodi rerum quia!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente facilis tempore eum dicta unde odit eveniet commodi rerum quia!</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;