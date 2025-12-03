import React from 'react'
import { Box, Button, IconButton, Rating, Typography } from '@mui/material'
import { AccountCircle, ArrowBack, ArrowDownward } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'

import p1 from "../../public/assets/products/p1.png"
import p2 from "../../public/assets/products/p2.png"
import p3 from "../../public/assets/products/p3.png"
import p4 from "../../public/assets/products/p4.png"

import c1 from "../../public/assets/certificates/c1.png"
import c2 from "../../public/assets/certificates/c2.png"
import c3 from "../../public/assets/certificates/c3.png"

import headerbg from "../../public/assets/samin.jpg"

import productimg from "../../public/assets/products/product-w.png"

import Product from '@/components/ui/Product'


export const products = [
  {
    id: 1,
    code: 857,
    title: "گچ سپنتا سمنان",
    boolQty: true,
    discriptions: ['25 کیلوگرم ', '30 کیلوگرم'],
    img: p1
  },
  {
    id: 2,
    code: 888,
    title: "گچ یاسمین سمنان",
    boolQty: true,
    discriptions: ['25 کیلوگرم ', '30 کیلوگرم'],
    img: p2
  },
  {
    id: 3,
    code: 231,
    title: "گچ عصار سمنان",
    boolQty: true,
    discriptions: ['25 کیلوگرم ', '30 کیلوگرم'],

    img: p3
  },
  {
    id: 4,
    code: 123,
    title: "گچ جلیل سمنان",
    boolQty: true,
    discriptions: ['25 کیلوگرم ', '30 کیلوگرم'],
    img: p4
  },
]

const certificates = [
  {
    id: 1,
    img: c1
  },
  {
    id: 2,
    img: c2
  },
  {
    id: 3,
    img: c3
  }
]


const comments = [
  { name: "علی رضایی", comment: "کیفیت گچ‌تون واقعا عالی بود، برای بازسازی خونه استفاده کردم خیلی راضی‌ام.", rating: 5 },
  { name: "مریم احمدی", comment: "بسته‌بندی تمیز و تحویل سریع داشتید، ممنون از خدمات خوبتون.", rating: 4 },
  { name: "حسین کریمی", comment: "قیمت نسبت به بازار مناسب‌تره، حتما دوباره سفارش می‌دم.", rating: 4 },
  { name: "زهرا محمدی", comment: "خیلی راحت روی دیوار می‌شینه و کار باهاش ساده‌ست، پیشنهاد می‌کنم.", rating: 5 },
  { name: "محسن جعفری", comment: "من برای پروژه ساختمونم گرفتم، کیفیت و سفیدی گچ بی‌نظیر بود.", rating: 5 },
  { name: "فاطمه مرادی", comment: "پشتیبانی خیلی خوب بود، سوالاتم رو سریع جواب دادن.", rating: 4 },
  { name: "رضا نصیری", comment: "گچ سبک و خوش‌کیفیت بود، زمان خشک شدنش عالیه.", rating: 5 },
  { name: "سمیه شریفی", comment: "بار به موقع رسید و از نظر کیفیت هیچ مشکلی نداشت.", rating: 4 },
  { name: "مجید اسدی", comment: "برای کارهای تزئینی گرفتم، خیلی خوب دراومد.", rating: 4 },
  // { name: "نگار کاظمی", comment: "واقعا گچ سفید و یکدستی بود، خیلی راضی‌ام.", rating: 5 }
];




const Home = async () => {



  return (

    <div className='overflow-hidden '>

      <div className="relative flex items-center justify-center h-150 lg:h-170" style={{ backgroundImage: `url(${headerbg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 backdrop-blur-sm z-0"></div>
        <section className="container z-40 ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 items-center  ">
            <div className="relative flex items-center justify-center md:justify-end">
              <div className="parallelogram absolute -z-10 w-[90%] lg:w-[70%] h-full"></div>
              <Image src={productimg} alt='product' className='w-60 h-60 md:w-90 md:h-90 drop-shadow-xl' width={500} height={500} />
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <Typography variant='h6' sx={{ color: "white", fontSize: { xs: "15px", lg: "20px" } }}>
                فروش انحصاری انواع گچ
              </Typography>
              <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: { xs: "40px", lg: "60px" } }}>
                شرکت گچ <Typography component={'span'} sx={{ color: '', fontWeight: 'inherit', fontSize: 'inherit' }}>ثمین</Typography>
              </Typography>
              <Typography variant='body2' className='text-gray-100 text-center md:text-start'>
                کیفیت را می‌سازیم تا شما با خیال آسوده بسازید،
                <br />
                اعتماد شما سرمایه اصلی ماست
              </Typography>
              <Link href="/products">
                <Button variant='contained' className='w-max' size='small' endIcon={<ArrowBack />}>مشاهده محصولات</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="container px-3 mx-auto">
        <Box className="mt-20">
          <Box className="flex w-full items-center justify-between py-2">
            <Typography variant="h6" component="div" className="font-bold">
              محصولات
            </Typography>
            <Link href="/products">
              <Button
                variant="text"
                endIcon={<ArrowBack />}
                className="text-sm text-gray-500"
              >
                مشاهده همه
              </Button>
            </Link>
          </Box>
          <Box className="grid w-[100%] lg:w-[80%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20 md:px-0">
            {products.slice(0, 4).map(product => (
              <Product key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </section>

      <section className="container px-3 mx-auto">
        <Box
          sx={{
            bgcolor: "primary.light",
          }}
          className="rounded-2xl mb-20 px-10 py-5 relative overflow-hidden"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10"></div>

          {/* Header */}
          <Box className="flex w-full items-center justify-between py-2 relative z-20">
            <Typography variant="h6" component="div" className="font-bold text-white drop-shadow-md">
              گواهی ها
            </Typography>
            <Link href="/aboutus">
              <Button
                variant="text"
                endIcon={<ArrowBack />}
                className="text-sm !text-white drop-shadow-md"
              >
                مشاهده درباره ما
              </Button>
            </Link>
          </Box>

          {/* Description */}
          <Box className="relative z-20 mt-2">
            <Typography variant="body1" className="text-white drop-shadow-md">
              خرید بهترین محصولات
            </Typography>
            <Typography variant="body2" className="text-white drop-shadow-md">
              باکیفیت‌ترین و به‌روزترین محصولات و دستگاه‌ها برای تولید
            </Typography>
          </Box>

          {/* certificate Grid */}
          <Box className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:px-0 relative z-20">
            {certificates.map((certificate) => (
              <Box
                key={certificate.id}
                className="bg-white shadow-xl rounded-xl relative overflow-hidden group w-full h-110"
              >
                <Image src={certificate.img.src} className='object-cover' fill alt="certificate" />
              </Box>
            ))}
          </Box>
        </Box>
      </section>

      {/* <section className="container px-3 mx-auto">
        <Box className="">
          <Box className="flex w-full items-center justify-between py-2">
            <Typography variant="h6" component="div" className="font-bold">
              پرفروش ترین محصولات
            </Typography>
            <Link href="/products">
              <Button
                variant="text"
                endIcon={<ArrowBack />}
                className="text-sm text-gray-500"
              >
                مشاهده همه
              </Button>
            </Link>
          </Box>
          <Box className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20 md:px-0">
            {products.slice(0, 4).map(product => (
              <Product key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </section> */}

      <div className="h-100 flex items-center justify-center relative" style={{ backgroundImage: `url(${headerbg.src})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: 'bottom' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10"></div>
        <section className='container px-3 mx-auto flex items-center justify-center flex-col gap-2 text-white z-40' >
          <Typography variant='h4' className='!font-extrabold ' >
            پیگیری محصول
          </Typography>
          <Typography variant='body1' className='text-center'>
            برای پیگیری سفارش خود روی دکمه زیر<br /> کلیک کنید
          </Typography>
          <Link href="/followup" >
            <Button variant='contained' size='large'>
              پیگیری
            </Button>
          </Link>
        </section>
      </div>

      <div className="relative h-100 flex items-center overflow-hidden w-800 m-auto">
        {comments.map((comment, index) => (
          <div
            className={`w-80 h-55 border border-gray-200 rounded-lg text-center bg-white shadow-lg p-3 flex items-center justify-between flex-col absolute left-[100%]`}
            style={{ animationName: "scrollleft", animationDuration: "30s", animationTimingFunction: "linear", animationIterationCount: 'infinite', animationDelay: `calc(30s / ${comments.length} * (${comments.length} - 1) * -${index + 1})` }}
            key={index}>
            <AccountCircle sx={{ fontSize: 50 }} className='text-gray-500' />
            <p className='font-bold'>{comment.name}</p>
            <Rating name="half-rating-read" defaultValue={comment.rating} precision={0.5} readOnly />
            <p className='text-gray-800'>{comment.comment}</p>
          </div>
        ))}
      </div>

    </div>

  )
}

export default Home