/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar } from "swiper";
import { Button } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function EventSwiper() {
    return (
        <div className="relative mt-7">
            <div className="sw-wrapper w-full h-[55vh]"></div>
            <Swiper navigation={true} scrollbar={true} modules={[Navigation, Scrollbar]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <div className="relative h-full w-full ">
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60">
                            <div>
                                <Button variant='contained' startIcon={<EventNoteIcon />} className='primary-gradient rounded-full uppercase px-5' >Upcoming</Button>
                                <div className="space-y-3 my-10 text-center">
                                    <div>Thu, Apr 21</div>
                                    <div className="text-2xl font-bold">Miami Minted
                                    </div>
                                    <div className="text-xl text-[#93d2fd] font-bold">Miami International Autodrome</div>
                                </div>
                                <Button variant='contained' className='primary-gradient uppercase font-bold' >View Drop</Button>
                            </div>
                        </div>
                        <img src="/assets/images/slider1.png" alt="slider1" className="z-10" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full w-full ">
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60">
                            <div>
                                <Button variant='contained' startIcon={<EventNoteIcon />} className='primary-gradient rounded-full uppercase px-5' >Upcoming</Button>
                                <div className="space-y-3 my-10 text-center">
                                    <div>Tue, Apr 19</div>
                                    <div className="text-2xl font-bold">On The Move
                                    </div>
                                    <div className="text-xl text-[#93d2fd] font-bold">Hass Design</div>
                                </div>
                                <Button variant='contained' className='primary-gradient uppercase font-bold' >View Drop</Button>
                            </div>
                        </div>
                        <img src="/assets/images/slider2.jpeg" alt="slider2" className="z-10" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    );
}