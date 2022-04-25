import React from 'react'
import EventSwiper from './EventSwiper'
import Subscription from './Subscription'
import TopCollections from './TopCollections'
import TopCreators from './TopCreators'

const Home = () => {
    return (
        <>
            <div className="Container">
                <div className="text-center font-bold">
                    <div className="heading">
                        Buy, sell, and showcase NFTs
                    </div>
                    <div className="text-xl mt-5">from leading creators and brands</div>
                </div>
                <EventSwiper />
            </div>
            <Subscription />
            <div className="Container">
                <TopCollections />
                <TopCreators />
            </div>
        </>
    )
}

export default Home