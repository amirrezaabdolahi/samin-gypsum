import { Instagram, Telegram, WhatsApp } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-[#242933] h-80 text-white flex items-center flex-wrap'>
            <div className="container mx-auto">
                <div className="flex items-center justify-around flex-wrap">
                    <div className="flex gap-3 items-center">
                        <a href="https://wa.me/989029820513?text=سلام%20من%20از%20سایت%20شما%20پیام%20می‌دم%20و%20می‌خواستم%20درباره%20محصولاتتون%20بپرسم" target="_blank">تماس با ما</a>
                        <Link href="/about" >درباره ما</Link>
                        <Link href="/portfolio" >نمونه کارها</Link>
                    </div>
                    <div className="flex gap-3 items-center">
                        <a href="#">
                            <Instagram />
                        </a>
                        <a href="#">
                            <Telegram />
                        </a>
                        <a href="#">
                            <WhatsApp />
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Image src="./logosamin.svg" alt="logo" className='object-cover w-25 h-25' width={50} height={50} />
                        <p className='text-2xl font-bold' >گچ ثمین</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer