import { NextResponse } from 'next/server';

// اجازه میدی middleware async باشه تا بتونیم fetch انجام بدیم
export async function middleware(req) {
  try {
    // 1) گرفتن IP (در صورت وجود reverse proxy از x-forwarded-for استفاده کن)
    const forwarded = req.headers.get('x-forwarded-for');
    // اگر لیست باشه، اولین آی‌پی واقعی کاربر معمولاً اولین عنصره
    const ip = forwarded ? forwarded.split(',')[0].trim() : req.ip ?? '';

    // 2) درخواست به سرویس جئولوکیشن (ipapi.co)
    // اگر ip خالی بود می‌تونی از endpoint بدون آی‌پی استفاده کنی،
    // اما در اکثر سرورها این به آی‌پی سرور ختم می‌شه؛ بهتره ip واقعی بفرستی.
    const lookupUrl = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';

    const geoRes = await fetch(lookupUrl, { next: { revalidate: 0 } });
    // بررسی کد وضعیت
    if (!geoRes.ok) {
      console.warn('Geo lookup failed', geoRes.status);
      return NextResponse.next();
    }

    const geo = await geoRes.json();
    const city = geo.city ?? 'unknown';
    const country = geo.country_name ?? geo.country ?? 'unknown';

    // 3) لاگ کن (structured log)
    console.log('[middleware] user-location', { ip, city, country, asn: geo.asn, org: geo.org });

    // 4) اضافه کردن هدر به پاسخ (در صورت نیاز برای خواندن در page/server)
    const res = NextResponse.next();
    // هدرها باید کوتاه باشن — می‌تونیم JSON کوچک یا فقط city|country بذاریم
    res.headers.set('x-user-city', city);
    res.headers.set('x-user-country', country);
    // اگه خواستی کل آبجکت رو هم بذاری (ممکنه طولانی شه)
    // res.headers.set('x-user-geo', JSON.stringify({ city, country }));

    return res;
  } catch (err) {
    console.error('[middleware] geo lookup error', err);
    return NextResponse.next();
  }
}

// فقط برای صفحهٔ اصلی اجرا شه
export const config = {
  matcher: '/',
};
