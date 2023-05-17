"use client";

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (<header>
        <nav className="inline-flex justify-between w-full items-center pb-4">
            <Link href="/" className="mr-6 font-bold text-xl flex items-center gap-1">
                <Image src="/logo_white.png" alt="Talent Hub's logo in white version" width={32} height={32}/>
                <span>Talent Hub</span>
            </Link>
            <ul className="inline-flex items-center text-sm text-livid">
                <li className="mr-6">
                    <Link href="/" className="hover:text-white delay-75 duration-100 ease-in-out">Blog</Link>
                </li>
                <li className="mr-6">
                    <Link href="/about" className="hover:text-white delay-75 duration-100 ease-in-out">Offres</Link>
                </li>
                <li className="mr-6">
                    <Link href="/contact"
                          className="hover:text-white delay-75 duration-100 ease-in-out">Trombinoscope</Link>
                </li>
            </ul>

            <SignedIn>
                <UserButton/>
            </SignedIn>

            <SignedOut>

                <Link href="/sign-in"
                      className="inline-flex justify-between hover:text-white delay-75 duration-100 ease-in-out text-livid text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-fingerprint">
                        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path>
                        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
                        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
                        <path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
                        <path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
                        <path d="M2 16h.01"></path>
                        <path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
                        <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path>
                    </svg>
                    <span className="ml-2">
                                Se connecter
                            </span>
                </Link>

            </SignedOut>
        </nav>
        <Separator/>
    </header>);
}