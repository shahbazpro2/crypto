/* eslint-disable @next/next/no-img-element */
import { Button, Divider } from '@mui/material'
import React from 'react'

const TopCollections = () => {
    return (
        <div className='py-10'>
            <div className="heading text-center">Top Collections</div>
            <div className="flex justify-between items-center">
                <div className="mt-16 flex items-center">
                    Sort By&nbsp;&nbsp;&nbsp;&nbsp;
                    <select>
                        <option>Sales Volume</option>
                        <option>Sales Volume %</option>
                        <option>Floor Price</option>
                        <option>Floor Price %</option>
                    </select>
                </div>
                <div className="flex space-x-3">
                    <Button variant='contained' className='primary-gradient rounded-full'>Today</Button>
                    <Button variant='contained' className='bg-dark rounded-full'>Last 7 Days</Button>
                    <Button variant='contained' className='bg-dark rounded-full'>Last 30 Days</Button>
                </div>

            </div>
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-10">
                    <div className="flex space-x-3 items-center font-bold">
                        <div>1</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/1.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center font-bold">
                        <div>2</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/2.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center font-bold">
                        <div>3</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/3.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center font-bold">
                        <div>3</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/3.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>


                    <div className="flex space-x-3 items-center font-bold">
                        <div>3</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/3.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center font-bold">
                        <div>3</div>
                        <img className="rounded-full w-16 h-16" src="/assets/images/3.gif" alt="gif" />
                        <div>
                            <div className="text-lg">Loaded Lions</div>
                            <div className="flex text-sm">
                                <div className='w-[120px]'>Floor:</div>
                                <div className='w-[80px]'>$3.9K</div>
                                <div className='w-[80px] py-[2px] px-2 bg-success rounded-md'>+1.32%</div>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <div className='w-[120px]'>Volume:</div>
                                <div className='w-[80px]'>$151.3K</div>
                                <div className='w-[80px] py-[2px] px-2 text-success rounded-md'>+18.62%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCollections