import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
    title: string;
    description: string;
    image: string;
}

export default function FeatureSection() {
    const features: FeatureSectionProps[] = [
        {
            title: "Nous disposons d'une communauté professionnelle et active",
            description: "Connectez-vous avec des individus compétents et engagés dans divers domaines.",
            image: "/discord-platform.png",
        },
        {
            title: "Développement de compétences",
            description: "Améliorez vos aptitudes et élargissez vos connaissances grâce à des collaborations enrichissantes.",
            image: "/features/skills-dev.png",
        },
        {
            title: "Présenter vos projets collaboratifs",
            description: "Participez à des initiatives novatrices et passionnantes au sein d'équipes dynamiques.",
            image: "/features/projets-collaboration.png",
        },
        {
            title: "Une atmosphère conviviale et accueillante",
            description: "Profitez d'un environnement bienveillant et chaleureux pour vous épanouir et vous développer.",
            image: "/discord-platform.png",
        },
    ];

    return (
        <section className="text-center flex flex-col justify-center items-center">

            <div>
                <span className="text-sm p-4 border-gray-600 border rounded-full text-livid">À propos</span>

                <h2 className="text-white text-6xl font-semibold break-normal whitespace-nowrap mt-14">
                    A propos de Talent Hub
                </h2>
            </div>

            <div className="mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-5">
                        <Image src={feature.image} alt={feature.title} width={200} height={200} />
                        <h3 className="font-semibold text-2xl">{feature.title}</h3>
                        <p className="text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
