/* eslint-disable @next/next/no-img-element */
import { Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import React from 'react'
import TokenIcon from '@mui/icons-material/Token';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarsIcon from '@mui/icons-material/Stars';

const CollectCard = ({ sale, title, subtitle, website, heartCount, image }) => <Card sx={{ borderRadius: 7 }} className="relative">
    <div className='primary-gradient font-medium text-white py-2 px-4 absolute top-5 left-5 z-10 rounded-3xl flex items-center'>
        <StarsIcon className='text-2xl' />
        <div className="text-lg ml-2">Total Sale:{sale}</div>
    </div>
    <CardMedia
        component="img"
        image={image}
        alt="collector"
        sx={{ height: '360px' }}
    />
    <CardContent sx={{ px: 3 }}>
        <div className="flex justify-between font-medium">
            <div>{subtitle}</div>
            <TokenIcon />
        </div>
        <div className="my-3 font-bold text-xl">{title}</div>
        <div className='text-xl text-gray-400 font-bold'>Accepting Offers</div>
        <div className="flex justify-between items-center mt-16">
            <div>
                <img src="/assets/images/crypto.jpeg" className='rounded-full w-10 inline' alt="image" />
                <span className='font-medium'>&nbsp;&nbsp;{website}</span>
            </div>
            <div>
                <FavoriteBorderIcon className="text-3xl" />
                <span className='font-medium'>&nbsp;{heartCount}</span>
            </div>
        </div>
    </CardContent>


</Card>


const TopCollectibles = () => {
    return (
        <div className='py-10'>
            <div className="heading text-center">Top Collectibles</div>
            <div className="flex justify-between items-center">
                <div className="mt-16 flex items-center">
                    Sort By&nbsp;&nbsp;&nbsp;&nbsp;
                    <select>
                        <option>Sales Volume</option>
                        <option>Most Likes</option>
                        <option>Most Views</option>
                    </select>
                </div>
                <div className="flex space-x-3">
                    <Button variant='contained' className='primary-gradient rounded-full'>Today</Button>
                    <Button variant='contained' className='bg-dark rounded-full'>Last 7 Days</Button>
                    <Button variant='contained' className='bg-dark rounded-full'>Last 30 Days</Button>
                    <Button variant='contained' className='bg-dark rounded-full'>All Time</Button>
                </div>

            </div>
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-16">
                    <CollectCard sale='69,458' title='Loaded Lion #10' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector1.jpeg" />

                    <CollectCard sale='69,458' title='Loaded Lion #3603' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector2.jpeg" />
                    <CollectCard sale='69,458' title='Loaded Lion #3603' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector3.jpeg" />
                    <CollectCard sale='69,458' title='Loaded Lion #3603' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector4.jpeg" />
                    <CollectCard sale='69,458' title='Loaded Lion #3603' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector5.jpeg" />
                    <CollectCard sale='69,458' title='Loaded Lion #3603' subtitle='Accepting Offers' website='Crypto.com' heartCount='399' image="/assets/images/collector6.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default TopCollectibles