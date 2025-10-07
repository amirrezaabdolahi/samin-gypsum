"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import RTLProvider from "./RTLProvider";

// تم راست‌چین + فونت فارسی + پس‌زمینه سفید
const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazirmatn, Arial",
    },
    palette: {
        background: {
            default: "#F3F4F6", // صفحه اصلی سفید
      paper: "#ffffff",   // کامپوننت‌ها مثل Card هم سفید
        },
        text: {
            primary: "#000000", // متن مشکی برای کنتراست
        },
    },
});

export default function ThemeRegistry({ children }) {
    return (
        <RTLProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </RTLProvider>
    );
}
