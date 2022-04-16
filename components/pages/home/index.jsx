import React from 'react'
import EventSwiper from './EventSwiper'

const Home = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="text-center font-bold">
                <div className="text-5xl">
                    Buy, sell, and showcase NFTs
                </div>
                <div className="text-xl mt-5">from leading creators and brands</div>
            </div>
            <EventSwiper />
        </div>
    )
}

export default Home