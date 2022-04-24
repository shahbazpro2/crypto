import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'

const Subscription = () => {
    return (
        <div className='h-[475px] bg-subscribe-bg mt-16 bg-cover py-10'>
            <div className="Container text-center space-y-7 font-medium">
                <div className="heading">Never miss a drop</div>
                <div className="text-3xl">Subscribe for the latest news, drops & collectibles</div>
                <div className="w-[40rem] m-auto space-y-7">
                    <div className="flex">
                        <TextField placeholder='Email' sx={{ '.MuiOutlinedInput-root': { borderTopRightRadius: 0, borderBottomRightRadius: 0 } }} className='w-full'></TextField>
                        <Button variant='contained' className='primary-gradient uppercase font-bold h-[48px] rounded-tl-none rounded-bl-none ' >Subscribe</Button>
                    </div>
                    <div className="text-sm px-3">
                        After reading the Privacy Notice, you may subscribe for our newsletter to get special offers and occasional surveys delivered to your inbox. Unsubscribe at any time by clicking on the link in the email.
                    </div>
                    <div className="flex justify-center items-center">
                        <Checkbox className='text-white' />
                        <div className="text-sm">By entering my email and subscribing I confirm and agree to the above.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Subscription