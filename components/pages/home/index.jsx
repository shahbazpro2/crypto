import React from 'react'
import EventSwiper from './EventSwiper'
import Subscription from './Subscription'

const Home = () => {
    return (
        <>
            <div className="Container">
                <div className="text-center font-bold">
                    <div className="text-5xl">
                        Buy, sell, and showcase NFTs
                    </div>
                    <div className="text-xl mt-5">from leading creators and brands</div>
                </div>
                <EventSwiper />
            </div>
            <Subscription />
        </>
    )
}

export default Home