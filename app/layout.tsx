'use client';

import './globals.css'
import {ParallaxProvider} from "react-scroll-parallax";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<ParallaxProvider>
            <html lang="en">
            <body>{children}</body>
            </html>
        </ParallaxProvider>)
}
