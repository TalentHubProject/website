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
        <section className="bg-white text-black flex w-full">
            <div className="container mx-auto">
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
