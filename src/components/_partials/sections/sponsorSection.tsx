import React from "react";
import Image from "next/image";

interface SponsorSectionProps {
    imageUrl: string;
    alt: string;
}

export default function SponsorSection() {
    const sponsors: SponsorSectionProps[] = [{
        imageUrl: "/sponsors/df.png",
        alt: "Logo de Discord France",
    }, {
        imageUrl: "/sponsors/elkir.png",
        alt: "Logo de l'association Elkir",
    }, {
        imageUrl: "/sponsors/lljs.png",
        alt: "Logo des Laboratoires JS",
    }, {
        imageUrl: "/sponsors/ltdd.png",
        alt: "Logo de La Taverne Du Design",
    },];

    return (
        <section className="text-livid w-full shadow-sm h-56 drop-shadow-2xl">
            <div className="container mx-auto flex items-center h-full flex-col">
                <span className="text-xl">
                  Soutenu par des personnes et projets à travers le monde
                </span>
                <div className="flex flex-row gap-5 items-center">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <Image src={sponsor.imageUrl} width={50} height={50} alt={sponsor.alt}/>
                        </div>))}
                </div>
            </div>
        </section>);
}