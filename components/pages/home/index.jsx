import React from 'react'
import EventSwiper from './EventSwiper'
import Subscription from './Subscription'
import TopCollectibles from './TopCollectibles'
import TopCollections from './TopCollections'
import TopCreators from './TopCreators'

const Home = () => {
    return (
        <>
            <div>
                <div className="Container text-center font-bold">
                    <div className="heading">
                        Buy, sell, and showcase NFTs
                    </div>
                    <div className="text-xl mt-5">from leading creators and brands</div>
                </div>
                <div className="px-40">
                    <EventSwiper />
                </div>
            </div>
            <Subscription />
            <div className="Container">
                <TopCollections />
                <TopCreators />
                <TopCollectibles />
            </div>
        </>
    )
}

export default Home