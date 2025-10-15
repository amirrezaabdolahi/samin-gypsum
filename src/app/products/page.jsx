import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { products } from '../page'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'




const page =  async () => {


    // const getData = async () => {
    //     try {
    //         const res = await fetch("http://localhost:3000/api/products", { cache: "no-cache" })
    //         const { data } = await res.json()


    //         return (data)
    //     } catch (error) {
    //         console.log("error in getting data from page : ", error.message);
    //     }
    // }

    // const products_1 = await getData()

    // console.log(products_1);


    return (
        <div className='container mx-auto mt-40 px-2 md:px-0'>
            <div className="w-full flex items-center justify-between py-5">
                <Typography variant='h5' className='!font-bold'>محصولات</Typography>
                <Typography variant='body1' className='text-gray-500'>32 محصول</Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
                {products.map(product => (
                    <Box key={product.id} className="bg-white group shadow-lg rounded-lg h-auto flex gap-2 flex-col justify-between p-5">
                        <img src={product.img.src} alt={product.name} className='group-hover:drop-shadow-2xl transition-all duration-300' />
                        <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: "bold" }}>
                            {product.title}
                        </Typography>
                        <ul>
                            {product.discriptions.map((des, index) => (
                                <li key={index}>
                                    <Typography variant='body2'>
                                        -{des}
                                    </Typography>
                                </li>
                            ))}
                            {/* <li>{product.description}</li> */}
                        </ul>
                        <Link href={`/products/${product.id}`} >
                            <Button variant='contained' endIcon={<ArrowBack />} className='w-full'>مشاهده</Button>
                        </Link>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default page