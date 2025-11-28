import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const FollowUPPage = () => {




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
                    <TextField size='small' />
                    <Button variant='contained'>
                        استعلام
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FollowUPPage