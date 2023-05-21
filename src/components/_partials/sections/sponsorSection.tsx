"use client";

import Image from "next/image";

interface SponsorSectionProps {
    image: string;
    alt: string;
}

export default function SponsorSection() {

    const sponsors: SponsorSectionProps[] = [
        {
            image: "/sponsors/df.png",
            alt: "Logo de Discord France"
        },
        {
            image: "/sponsors/elkir.png",
            alt: "Logo de l'association Elkir"
        },
        {
            image: "/sponsors/lljs.png",
            alt: "Logo des Laboratoires JS"
        },
        {
            image: "/sponsors/ltdd.png",
            alt: "Logo de La Taverne Du Design"
        }
    ];

    return (
        <section className="bg-white text-black w-full shadow-sm h-56">
            <div className="container mx-auto flex items-center h-full">
                <span className="font-semibold text-xl">Soutenu par des personnes et projets à travers le monde</span>
                <div className="flex flex-row gap-5 items-center">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <Image src={sponsor.image} width={50} height={50} alt={sponsor.alt} className="grayscale"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}