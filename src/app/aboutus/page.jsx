import { Box, Typography } from '@mui/material'
import React from 'react'


import c1 from "../../../public/assets/certificates/c1.png"
import c2 from "../../../public/assets/certificates/c2.png"
import c3 from "../../../public/assets/certificates/c3.png"
import c4 from "../../../public/assets/certificates/c4.png"
import c5 from "../../../public/assets/certificates/c5.png"

const AboutPage = () => {
    return (
        <Box className="mt-40 container mx-auto rounded-lg px-2 md:px-0">
            <section className="bg-gradient-to-b from-white to-gray-50 py-16 z-10 rounded-lg mb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Hero / Headline */}
                    <header className="text-center mb-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            <span className="block text-4xl md:text-5xl text-gray-700">شرکت</span>
                            <span className="block text-5xl md:text-7xl text-[#1565C0] mt-2">گچ ثمین سمنان</span>
                            <span className="block text-lg md:text-xl text-gray-500 mt-4">سفیدی، خلوص و استحکام برای خانه‌ها و پروژه‌های شما</span>
                        </h1>
                    </header>

                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                        {/* Main text */}
                        <div className="lg:col-span-2 p-4">
                            <h2 className="text-2xl font-semibold mb-4">درباره ما</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                شرکت <strong>گچ ثمین سمنان</strong>، با شماره ثبت <strong>۱۰۸۶۰۰۹۴۹۱۰</strong> و تاریخ تأسیس <strong>۲۰ مهر ۱۳۸۱</strong>, یکی از پیشگامان تولید مصالح گچی در استان سمنان و سراسر کشور است. ما از آغاز مسیر خود، کیفیت، نوآوری و مشتری‌مداری را به‌عنوان سه اصل بنیادین سرلوحه‌ی فعالیت‌هایمان قرار داده‌ایم.
                            </p>

                            <h3 className="text-xl font-medium mt-4">مأموریت ما</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                تولید <strong>گچ سفیدکاری</strong> با خلوص بالا و دوام مطلوب، بر اساس استانداردهای بین‌المللی؛ تا رضایت پیمانکاران، معماران و مصرف‌کنندگان نهایی را به دست آوریم. با تکیه بر دانش مهندسی، کنترل کیفی دقیق و بهره‌گیری از تجهیزات مدرن، تلاش می‌کنیم محصولاتی ارائه دهیم که در ساخت فضاها و سازه‌هایی سال‌ها ماندگار می‌مانند.
                            </p>

                            <h3 className="text-xl font-medium mt-4">ارزش‌ها و ویژگی‌های متمایز</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                                <li>کیفیت بالا و ثبات در تولید</li>
                                <li>پایبندی به استانداردهای داخلی و بین‌المللی</li>
                                <li>نوآوری و ارتقاء مستمر فرآیندها</li>
                                <li>احترام به محیط زیست و مدیریت مصرف انرژی</li>
                                <li>خدمات پشتیبانی و پاسخگویی به‌موقع</li>
                                <li>اعتماد و شفافیت در تعاملات تجاری</li>
                            </ul>
                        </div>

                        {/* Sidebar: Capacity & Location */}
                        <aside className="p-4 bg-gray-50 rounded-xl flex flex-col justify-between">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">ظرفیت و موقعیت کارخانه</h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    کارخانه‌ی گچ ثمین سمنان در <strong>کیلومتر ۱۸ جاده فیروزکوه، بخش کهپرسرخه (جهنم‌دره)</strong> واقع شده است. این مجموعه با تجهیزات پیشرفته و خطوط تولید به‌روز، توان تولید گچ سفیدکاری، گچ دو سرنده و انواع گچ ساختمانی را در ظرفیت بالا دارد.
                                </p>

                                <h4 className="text-lg font-semibold mb-2">چشم‌انداز</h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    تبدیل شدن به یکی از برترین برندهای گچ‌سازی ایران و گسترش سهم بازار در داخل و منطقه، همراه با تمرکز بر کاهش ضایعات و بهینه‌سازی زنجیره تأمین.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-sm text-gray-500">شماره ثبت</h5>
                                <p className="font-medium">۱۰۸۶۰۰۹۴۹۱۰</p>

                                <h5 className="text-sm text-gray-500 mt-3">تأسیس</h5>
                                <p className="font-medium">۲۰ مهر ۱۳۸۱</p>
                            </div>
                        </aside>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">برای مشاوره فنی و سفارش با تیم فروش و پشتیبانی ثمین سمنان در تماس باشید.</p>
                        <div className="inline-flex gap-3">
                            <a href="tel:+98" className="px-6 py-3 rounded-xl bg-[#1565C0] text-white font-semibold shadow">تماس تلفنی</a>
                            <a href="mailto:info@example.com" className="px-6 py-3 rounded-xl border border-[#1565C0] text-[#1565C0] font-semibold">ارسال ایمیل</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <p className="block text-3xl md:text-4xl font-bold text-gray-700 mb-5">
                    گواهی ها
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <img src={c1.src} className='w-full h-full shadow-lg rounded-lg overflow-hidden ' alt="گواهی اول" />
                    <img src={c2.src} className='w-full h-full shadow-lg rounded-lg overflow-hidden ' alt="گواهی دوم" />
                    <img src={c3.src} className='w-full h-full shadow-lg rounded-lg overflow-hidden ' alt="گواهی سوم" />
                    <img src={c4.src} className='w-full h-full shadow-lg rounded-lg overflow-hidden ' alt="گواهی چهارم" />
                </div>
            </section>
        </Box>
    )
}

export default AboutPage