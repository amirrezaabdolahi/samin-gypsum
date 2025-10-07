import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import headerImage from "../../../public/assets/header-2.jpg"
import pdfIcon from "../../../public/icons/pdf-icon.png"
import { ArrowBack, Group, Star, StarHalf } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='relative'>
            <Box
                className='w-full h-[80dvh] flex flex-col justify-center items-center  '
                sx={{
                    backgroundImage: `url(${headerImage.src})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "primary.light"
                }}>
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/30 backdrop-blur-xs z-10"></div>


                <Box className="z-20 flex flex-col gap-4">
                    <Typography variant='h2' className='text-white text-center font-extrabold mb-4 sm:text-xl' sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" } }}>
                        به وبسایت ما خوش آمدید
                    </Typography>
                    <Typography variant='h6' className='text-white text-center mb-6 italic' sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" } }}>
                        بهترین محصولات را با قیمت‌های باورنکردنی کشف کنید
                    </Typography>
                    <Box className='flex justify-center'>
                        <Link href="/products" className='no-underline'>
                            <Button variant='contained' color='primary' size='medium' endIcon={<ArrowBack />} sx={{ textTransform: "none", fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                                مشاهده محصولات
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className="absolute container mx-auto right-0 left-0 -bottom-85 md:-bottom-50 text-white text-center z-20 grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-5">
                <Box className="h-65 w-full  rounded-xl shadow-lg flex flex-col justify-center " sx={{ bgcolor: 'white' }}>

                    <Box sx={{ color: "#fbc02d", fontSize: { xs: 25, md: 40 } }} >
                        <StarHalf sx={{ fontSize: 'inherit' }} />
                        <Star sx={{ fontSize: 'inherit' }} />
                        <Star sx={{ fontSize: 'inherit' }} />
                        <Star sx={{ fontSize: 'inherit' }} />
                        <Star sx={{ fontSize: 'inherit' }} />
                    </Box>

                    <Box>
                        <Typography variant='h5' sx={{ color: "black", fontWeight: "bold", mt: 1, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
                            رضایت مشتریان
                        </Typography>
                        <Typography variant='body1' sx={{ color: "gray", px: 2, mb: 2, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                            بیش از 95% مشتریان ما از خرید خود راضی بوده‌اند
                        </Typography>
                    </Box>

                </Box>
                <Box className="h-65 w-full  rounded-xl shadow-lg items-center flex flex-col justify-center" sx={{ bgcolor: 'white' }}>
                    <Group sx={{ fontSize: { xs: 45, md: 60 }, color: "primary.main" }} />
                    <Box>
                        <Typography variant='h5' sx={{ color: "black", fontWeight: "bold", mt: 1, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
                            کاربران فعال
                        </Typography>
                        <Typography variant='body1' sx={{ color: "gray", px: 2, mb: 2, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                            بیش از 10,000 کاربر فعال در سراسر کشور
                        </Typography>
                    </Box>
                </Box>
                <Box className="h-25 md:h-65  w-full  rounded-xl shadow-lg items-center flex md:flex-col justify-center col-span-full md:col-auto" sx={{ bgcolor: 'white' }}>
                    <Link href="/catalog.pdf" target='_blank' download>
                        <Image src={pdfIcon} alt="PDF Icon" className='' width={60} height={60} />
                    </Link>
                    <Box>
                        <Typography variant='h5' sx={{ color: "black", fontWeight: "bold", mt: 1, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
                            دانلود کاتالوگ
                        </Typography>
                        <Typography variant='body1' sx={{ color: "gray", px: 2, mb: 2, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                            کاتالوگ محصولات ما را به صورت PDF دانلود کنید
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Header