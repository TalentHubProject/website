import React from "react";
import Image from "next/image";

interface SponsorSectionProps {
    image: React.ReactElement;
    alt: string;
}

export default function SponsorSection() {
    const sponsors: SponsorSectionProps[] = [
        {
            image: <Image src="/sponsors/df.png" width={50} height={50}  alt={"Logo de Discord France"}/>,
            alt: "Logo de Discord France",
        },
        {
            image: <Image src="/sponsors/elkir.png" width={50} height={50} alt={"Logo de l'association Elkir"}/>,
            alt: "Logo de l'association Elkir",
        },
        {
            image: <Image src="/sponsors/lljs.png" width={50} height={50}  alt={"Logo du Laboratoire JS"}/>,
            alt: "Logo des Laboratoires JS",
        },
        {
            image: <Image src="/sponsors/ltdd.png" width={50} height={50}  alt={"Logo de La Taverne Du Design"}/>,
            alt: "Logo de La Taverne Du Design",
        },
    ];

    return (
        <section className="bg-white text-black w-full shadow-sm h-56 drop-shadow-2xl">
            <div className="container mx-auto flex items-center h-full">
        <span className="font-semibold text-xl">
          Soutenu par des personnes et projets à travers le monde
        </span>
                <div className="flex flex-row gap-5 items-center">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            {sponsor.image}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
