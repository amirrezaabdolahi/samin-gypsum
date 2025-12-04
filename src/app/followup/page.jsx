"use client"

import { Autorenew } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const FollowUPPage = () => {

    const [loading, setLoading] = React.useState(false)
    const [orderCode, setOrderCode] = React.useState('')
    const [status, setStatus] = React.useState(" لطفا کد سفارش خود را وارد کنید")
    const handleCheckOrder = () => {
        setLoading(true)
        // Simulate an API call or some processing
        setTimeout(() => {
            setLoading(false)
            // Here you would typically handle the response and show order status
            setStatus(`وضعیت سفارش با کد ${orderCode} : در حال پردازش`)
        }, 2000)
    }



    return (
        <div className='container mx-auto w-full h-screen flex items-center justify-center px-3'>
            <div>
                <Typography variant='h4' className='!font-extrabold'>
                    پیگیری سفارش
                </Typography>
                <Typography variant='body1'>
                    با وارد کردن کد سفارش خود وضعیت آن میتوانید از وضعیت آن مطلع شوید
                </Typography>
                <div className='flex gap-3'>
                    <TextField focused size='small' onChange={e => setOrderCode(e.target.value)} value={orderCode} />
                    <Button variant='contained' onClick={handleCheckOrder}>
                        استعلام
                    </Button>
                </div>
                <div className=" w-full h-20 flex items-center justify-center mt-5">
                    {loading ? (
                        <Autorenew className='animate-spin text-blue-500' sx={{ fontSize: 40 }} />
                    ) : (
                        <Typography variant='body1'>
                            {status}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FollowUPPage