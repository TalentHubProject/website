"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarComponent() {

    return (<nav className={"container mx-auto flex mt-4 mb-8 items-center gap-4 mb-72"}>
        <Link href={"/"} className={"flex items-center"}>
            <Image src={"logo.svg"} alt={"Talent Hub's logo"} width={32} height={32}/>
            <span className={"font-semibold"}>Talent Hub</span>
        </Link>

        <ul className={"flex items-center ml-auto"}>
            <li className={"mr-6"}>
                <Link href={"/"}>Home</Link>
            </li>
            <li className={"mr-6"}>
                <Link href={"/about"}>About</Link>
            </li>
            <li className={"mr-6"}>
                <Link href={"/contact"}>Contact</Link>
            </li>
        </ul>

        <a href="https://google.com"
           className={"flex bg-white px-3 py-1 rounded-full items-center justify-center gap-2"}>
            <span className={"text-gray-800 text-sm"}>Start your journey</span>
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.85046 13.4005C5.74589 13.4005 4.85046 12.5051 4.85046 11.4005V3.40051H2.85046V11.4005C2.85046 13.6097 4.64132 15.4005 6.85046 15.4005H17.156L13.3714 19.1852L14.7856 20.5994L21.1495 14.2354L14.7856 7.87146L13.3714 9.28567L17.4862 13.4005H6.85046Z"/>
            </svg>
        </a>
    </nav>)
}