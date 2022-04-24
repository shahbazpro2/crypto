import React from 'react'

const TopCollections = () => {
    return (
        <div className='py-10'>
            <div className="heading text-center">Top Collections</div>
            <div className="mt-5 flex items-center">
                Sort By&nbsp;&nbsp;&nbsp;&nbsp;
                <select>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>


            </div>
        </div>
    )
}

export default TopCollections