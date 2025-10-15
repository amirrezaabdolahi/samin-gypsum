export async function GET(request) {
    // گرفتن آی‌پی کاربر از هدر
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.ip ?? '';

    try {
        // درخواست به ipapi برای دریافت اطلاعات مکان
        const res = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await res.json();

        return Response.json({
            ip: ip || 'unknown',
            city: data.city || 'unknown',
            country: data.country_name || 'unknown',
        });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch location' }, { status: 500 });
    }
}
