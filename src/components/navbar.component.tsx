"use client";

import React, {useState} from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="inline-flex justify-between w-full items-center">
                <ul className="inline-flex items-center">
                    <li>
                        <Link href="/" className="mr-6 font-bold text-2xl">
                            Talent Hub
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="inline-flex">
                    <li className="mr-6">
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}