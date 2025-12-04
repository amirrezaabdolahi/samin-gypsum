import { products } from '@/app/page'
import { Shop } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { notFound } from 'next/navigation'
import React from 'react'

const ProductPage = async ({ params }) => {
    const { id } = await params
    const product = products.find(product => product.id === Number(id))

    if (!product) {
        notFound()
    }

    const phone = '989029820513'
    const message = `سلام من میخواستم از این محصول استعلام بگیرم
    نام محصول : ${product.title}
    کد محصول : ${product.code}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
        <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
            <Box className="h-full flex items-center justify-center md:justify-end" sx={{ bgcolor: "primary.main" }}>
                <Box className="">
                    <img src={product.img.src} className='w-100 md:w-200' alt={product.title} />
                </Box>
            </Box>
            <Box className="h-full flex items-start mt-4 md:mt-0 md:items-center  justify-start">
                <div className="px-3 flex-col flex gap-2">
                    <Typography variant='h3' className='!font-bold' sx={{fontSize: {xs : 30 , md : 40 , lg:45}}} >
                        {product.title}
                    </Typography>
                    <Typography variant='body1'>
                        کد محصول : {product.code}
                    </Typography>
                    <ul>
                        {product.discriptions.map((des, index) => (
                            <li key={index}>
                                <Typography variant='body1' className='text-gray-700 !font-light'>
                                    -{des}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <a href={whatsappUrl} target="_blank" className='mt-2'>
                        <Button variant='contained' endIcon={<Shop />}>
                            جهت سفارش کلیک کنید
                        </Button>
                    </a>
                </div>
            </Box>
        </div>
    )
}

export default ProductPage