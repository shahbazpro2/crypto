/* eslint-disable @next/next/no-img-element */
import { Button } from '@mui/material'
import React from 'react'
import StarsIcon from '@mui/icons-material/Stars';

const TopCreators = () => {
    return (
        <div className='py-20 text-center space-y-10'>
            <Button startIcon={<StarsIcon />} variant="contained" className='primary-gradient rounded-full px-5 py-2 text-lg'>Best Selling</Button>
            <div className="heading text-center">Top Creators</div>
            <div className="mt-16">
                <div className="grid grid-cols-6">
                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator1.jpeg" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">Aston Martin F1</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $2,000,000+</div>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator2.jpeg" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">Ugonzo Art</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $2,000,000+</div>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator3.jpeg" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">Travis Ragsdale</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $2,000,000+</div>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator4.png" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">Ballies</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $2,000,000+</div>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator5.jpeg" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">Snoop Dogg</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $1,000,000+</div>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <img className='rounded-full m-auto h-[150px] w-[150px]' src="/assets/images/creator6.gif" alt="creator" />
                        <div className="space-y-1">
                            <div className="text-lg">DaRealGenius</div>
                            <div className="flex space-x-2 justify-center">
                                <StarsIcon className='text-secondary text-2xl' />
                                <div> $1,000,000+</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCreators