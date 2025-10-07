import React from 'react'
import { Box, Button, IconButton, Rating, Typography } from '@mui/material'
import { AccountCircle, ArrowBack, ArrowDownward, Construction, Group, Instagram, Star, StarHalf, Telegram, WhatsApp } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/ui/Header'

import p1 from "../../public/assets/products/p1.png"
import p2 from "../../public/assets/products/p2.png"
import p3 from "../../public/assets/products/p3.png"
import p4 from "../../public/assets/products/p4.png"
import p5 from "../../public/assets/products/p5.png"
import p6 from "../../public/assets/products/p6.png"

import c1 from "../../public/assets/certificates/c1.png"
import c2 from "../../public/assets/certificates/c2.png"
import c3 from "../../public/assets/certificates/c3.png"

import productimg from "../../public/assets/products/product-w.png"

import bgimg from "../../public/assets/header-1.jpg"


export const products = [
  {
    id: 1,
    code: 857,
    title: "بتونه درزگیر",
    boolQty: true,
    discriptions: ["قدرت چسبندگی بسیار زیاد", "مقاومت مکانیکی مناسب", "زمان گیرش و کارپذیری بالا"],
    img: p1
  },
  {
    id: 2,
    code: 888,
    title: "بتونه ماستیک",
    boolQty: true,
    discriptions: ["قدرت چسبندگی بالا", "سمباده‌خوری خوب", "زمان گیرش و کارپذیری مناسب"],
    img: p2
  },
  {
    id: 3,
    code: 231,
    title: "گچ پلیمری زیرکار سیوا دستی",
    boolQty: true,
    discriptions: ["عایق مناسب حرارت، صوت و رطوبت", "مقاومت بالا در برابر نیروهای فشاری، خمشی، ترک‌خوردگی", "چسبندگی بسیار بالا به سطوح مختلف از قبیل سنگ و آجر"],

    img: p3
  },
  {
    id: 4,
    code: 123,
    title: "گچ سیوای پاششی",
    boolQty: true,
    discriptions: ["سرعت بسیار بالای کار و کاهش زمان گچ‌کاری", "کاهش ضایعات گچ", "زمان گیرش بالاتر از گچ‌های معمولی", "پرکردن تخلل موجود در سطح به دلیل فشار پاشش"],
    img: p4
  },
  {
    id: 5,
    code: 534,
    title: "پرلیت منبسط",
    boolQty: true,
    discriptions: [
      "سبک‌سازی مصالح ساختمانی",
      "پرکننده و ماده حامل در بسیاری صنایع مانند کاشی و سرامیک، متالورژی، کشاورزی ",
      "به عنوان عایق صوت، حرارت، حریق و رطوبت"
    ],
    img: p5
  },
  {
    id: 6,
    code: 756,
    title: "گچ ضد آب",
    boolQty: true,
    discriptions: ["قدرت چسبندگی بسیار زیاد", "عایق مناسب صوت و حرارت"],
    img: p6
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
    // <div>
    //   <Typography variant='h1' >hello</Typography>
    // </div>


    <div className='overflow-hidden px-2'>

      <section className="container mx-auto h-[80dvh] mt-25 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 items-center h-full ">
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="parallelogram absolute -z-10 w-[70%] h-full"></div>
            <Image src={productimg} alt='product' className='w-80 h-80    md:w-100 md:h-100 ' width={300} height={300} />
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <Typography variant='h6' sx={{ color: "primary.main", fontSize: { xs: "15px", lg: "20px" } }}>
              فروش انحصاری انواع گچ
            </Typography>
            <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: { xs: "40px", lg: "60px" } }}>
              شرکت گچ ثمین
            </Typography>
            <Typography variant='body1' className='text-gray-500 text-center md:text-start'>
              کیفیت را می‌سازیم تا شما با خیال آسوده بسازید،
              <br />
              اعتماد شما سرمایه اصلی ماست
            </Typography>
            <Link href="/products">
              <Button variant='contained' className='w-max' endIcon={<ArrowBack />}>مشاهده محصولات</Button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <IconButton sx={{ backgroundColor: 'primary.main', color: 'white' }}>
            <ArrowDownward />
          </IconButton>
        </div>
      </section>

      <section className="container mx-auto">
        <Box className="mt-20">
          <Box className="flex w-full items-center justify-between py-2">
            <Typography variant="h6" component="div" className="font-bold">
              جدیدترین محصولات
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
              <Box key={product.id} className="h-100 bg-white shadow-xl rounded-xl relative overflow-hidden group flex items-center justify-center ">
                <img className='w-[80%] h-[80%] drop-shadow-2xl group-hover:scale-[1.1] transition-all duration-300' src={product.img.src} alt={product.title} />
                <Box className="p-4 absolute -bottom-88 group-hover:bottom-0 h-full w-full bg-blue-500/20 backdrop-blur-sm transition-all duration-300">
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
                    <IconButton sx={{ bgcolor: "primary.main", color: "white", position: "absolute", right: "10px", bottom: "10px", ":hover": { rotate: "45deg" }, transition: "all 150ms ease" }} size="medium">
                      <ArrowBack fontSize='5px' />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </section>

      <section className="container mx-auto">
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
            <Link href="/portfolio">
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

          {/* Products Grid */}
          <Box className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:px-0 relative z-20">
            {certificates.map((certificate) => (
              <Box
                key={certificate.id}
                className="h-auto bg-white shadow-xl rounded-xl relative overflow-hidden group"
              >
                <img src={certificate.img.src} className=' object-fill ' alt="certificate" />
              </Box>
            ))}
          </Box>
        </Box>
      </section>

      <section className="container mx-auto">
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
              <Box key={product.id} className="h-100 bg-white shadow-xl rounded-xl relative overflow-hidden group flex items-center justify-center ">
                <img className='w-[80%] h-[80%] drop-shadow-2xl group-hover:scale-[1.1] transition-all duration-300' src={product.img.src} alt={product.title} />
                <Box className="p-4 absolute -bottom-88 group-hover:bottom-0 h-full w-full bg-blue-500/20 backdrop-blur-sm transition-all duration-300">
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
                    <IconButton sx={{ bgcolor: "primary.main", color: "white", position: "absolute", right: "10px", bottom: "10px", ":hover": { rotate: "45deg" }, transition: "all 150ms ease" }} size="medium">
                      <ArrowBack fontSize='5px' />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </section>

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