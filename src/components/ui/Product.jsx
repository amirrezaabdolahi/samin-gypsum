"use client"
import { ArrowBack, ArrowUpward, Close, Info, Menu } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

const Product = ({ key, product }) => {


    const [isInfoOpen, setIsInfoOpen] = useState(false)

    return (
        <Box key={key} className="shadow-lg w-[90%] m-auto md:w-auto group border border-gray-200 bg-gray-200 rounded-lg p-4 flex flex-col justify-center items-center gap-2">
            <div className=" bg-gray-300/50 rounded-xl overflow-hidden flex justify-center items-center">
                <img src={product.img.src} alt={product.title} className='w-70 md:w-80 lg:w-full group-hover:scale-105 transition-transform duration-200' />
            </div>
            <Link href={`/products/${product.id}`}>
                <Button variant='contained' endIcon={<ArrowBack/>}>
                    <Typography variant='body2'>{product.title}</Typography>
                </Button>
            </Link>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={1}>
                <Typography variant='subtitle2'>کد محصول:</Typography>
                <Typography variant='subtitle2' fontWeight={'bold'}>{product.code}</Typography>
            </Box>
        </Box>
    )
}

export default Product