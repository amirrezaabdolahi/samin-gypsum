import { NextResponse } from "next/server"


export async function GET() {
    
    try {
        const res = await fetch("https://b1f5349a4ac6.ngrok-free.app/api/products")

        const data = await res.json()

        return NextResponse.json({data})
    } catch (error) {
        console.log("error in getting data from databas : " , error.message);
    }


}