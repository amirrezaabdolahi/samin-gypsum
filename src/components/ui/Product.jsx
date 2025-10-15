"use client"
import { ArrowBack, Close, Info } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

const Product = ({ key, product }) => {


    const [isInfoOpen, setIsInfoOpen] = useState(false)

    return (
        <Box key={key} className="h-100 bg-white shadow-xl rounded-xl relative overflow-hidden group flex items-center justify-center ">
            <img className={`w-[80%] h-[80%] drop-shadow-2xl group-hover:scale-[1.1] ${isInfoOpen && "scale-[1.1]"} transition-all duration-300`} src={product.img.src} alt={product.title} />
            <IconButton className='!absolute bottom-0 left-0 z-20' size='large' onClick={() => setIsInfoOpen(!isInfoOpen)}>
                {isInfoOpen ? (<Close fontSize='large' className='group-hover:text-[#1565C0]' />): (<Info fontSize = 'large' className = 'group-hover:text-[#1565C0]' />)}
            </IconButton>
            <Box className={`p-4 absolute -bottom-[100%] ${isInfoOpen && "!bottom-0"} h-full w-full bg-blue-500/20 backdrop-blur-sm transition-all duration-300 flex flex-col gap-4`}>
                <Typography variant="body1" component="div" className="font-bold mb-2 text-center">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-2">
                    کد محصول: {product.code}
                </Typography>
                <ul>
                    {product.discriptions.map((desc, index) => (
                        <li key={index} className="text-sm">- {desc}</li>
                    ))}
                </ul>

                <Link href={`/products/${product.id}`}>
                    <Button variant='outlined' size="medium">
                        مشاهده
                        <ArrowBack fontSize='5px' />
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Product