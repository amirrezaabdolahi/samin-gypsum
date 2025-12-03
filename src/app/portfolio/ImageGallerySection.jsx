"use client"
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'

const ImageGallerySection = () => {

    const [index, setIndex] = useState(0);

    const images = [
        { id: 1, src: '/assets/gallery/pics/p(1).jpg', alt: 'Image 1' },
        { id: 2, src: '/assets/gallery/pics/p(2).jpg', alt: 'Image 2' },
        { id: 3, src: '/assets/gallery/pics/p(3).jpg', alt: 'Image 3' },
        { id: 4, src: '/assets/gallery/pics/p(4).jpg', alt: 'Image 4' },
        { id: 5, src: '/assets/gallery/pics/p(5).jpg', alt: 'Image 5' },
        { id: 6, src: '/assets/gallery/pics/p(6).jpg', alt: 'Image 6' },
        { id: 7, src: '/assets/gallery/pics/p(7).jpg', alt: 'Image 7' },
        { id: 8, src: '/assets/gallery/pics/p(8).jpg', alt: 'Image 8' },
        { id: 9, src: '/assets/gallery/pics/p(9).jpg', alt: 'Image 9' },
        { id: 10, src: '/assets/gallery/pics/p(10).jpg', alt: 'Image 10' },
        { id: 11, src: '/assets/gallery/pics/p(11).jpg', alt: 'Image 11' },
        { id: 12, src: '/assets/gallery/pics/p(12).jpg', alt: 'Image 11' },
        { id: 13, src: '/assets/gallery/pics/p(13).jpg', alt: 'Image 13' },
        { id: 14, src: '/assets/gallery/pics/p(14).jpg', alt: 'Image 14' },
        { id: 15, src: '/assets/gallery/pics/p(15).jpg', alt: 'Image 15' },
        { id: 16, src: '/assets/gallery/pics/p(16).jpg', alt: 'Image 16' },
        { id: 17, src: '/assets/gallery/pics/p(17).jpg', alt: 'Image 17' },
        { id: 18, src: '/assets/gallery/pics/p(18).jpg', alt: 'Image 18' },
    ]

    return (
        <div className='w-full lg:w-200 mx-auto'>
            <div className="">
                <Image src={images[index].src} alt={images[index].alt} width={500} height={200} className=' mx-auto h-70 lg:h-100 object-cover w-full rounded-lg mb-4' />
            </div>
            <div className='flex justify-between space-x-2 overflow-x-auto'>
                <Button variant="contained" onClick={() => setIndex((index + 1) % images.length)}>
                    <KeyboardArrowRight />
                </Button>
                <Button variant="contained" onClick={() => setIndex((index - 1 + images.length) % images.length)}>
                    <KeyboardArrowLeft />
                </Button>
            </div>
        </div>
    )
}

export default ImageGallerySection