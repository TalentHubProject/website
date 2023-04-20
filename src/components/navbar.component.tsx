"use client";

import React, {useState} from "react";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className="inline-flex justify-between w-full items-center pb-5">
                <ul className="inline-flex items-center">
                    <li>
                        <Link href="/" className="mr-6 font-bold text-xl">
                            Talent Hub
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/" className="text-gray-400 text-sm hover:text-white delay-75 duration-100 ease-in-out">Pôles</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/" className="text-gray-400 text-sm hover:text-white delay-75 duration-100 ease-in-out">Blog</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/about" className="text-gray-400 text-sm hover:text-white delay-75 duration-100 ease-in-out">Offres</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/contact" className="text-gray-400 text-sm hover:text-white delay-75 duration-100 ease-in-out">Trombinoscope</Link>
                    </li>
                </ul>
                <ul className="inline-flex">
                    <li className="mr-6">
                        <Link href="/login">Se connecter</Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/register">S'enregistrer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}