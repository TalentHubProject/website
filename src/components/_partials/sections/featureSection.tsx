"use client";
// We use different functional component declaration ways to avoid "unexpected token" when using client-side rendering

import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
    title: string;
    description: string;
    image: string;
}

const FeatureSection = () => {
    const features: FeatureSectionProps[] = [{
        title: "Nous disposons d'une communauté professionnelle et active",
        description: "Connectez-vous avec des individus compétents et engagés dans divers domaines.",
        image: "/discord-platform.png",
    }, {
        title: "Développement de compétences",
        description: "Améliorez vos aptitudes et élargissez vos connaissances grâce à des collaborations enrichissantes.",
        image: "/features/skills-dev.png",
    }, {
        title: "Présenter vos projets collaboratifs",
        description: "Participez à des initiatives novatrices et passionnantes au sein d'équipes dynamiques.",
        image: "/features/projets-collaboration.png",
    }, {
        title: "Une atmosphère conviviale et accueillante",
        description: "Profitez d'un environnement bienveillant et chaleureux pour vous épanouir et vous développer.",
        image: "/discord-platform.png",
    },];

    return (
        <section className="text-center flex flex-col justify-center items-center">

            <div>
                <span className="text-sm p-4 border-gray-600 border rounded-full text-livid">À propos</span>

                <h2 className="text-white text-6xl font-semibold break-normal whitespace-nowrap mt-14">
                    A propos de Talent Hub
                </h2>
            </div>

        <div className="mt-20 w-screen grid grid-cols-1 gap-y-50 items-start relative">
            {features.map((feature, index) => (
               <div key={index} className={
                    `rounded-xl mx-40 my-40 flex flex-row justify-center items-center gap-5 text-white bg-[#D8CFCF] bg-opacity-10
                   ${(index%2 === 0) ? 'justify-self-end' : 'justify-self-start'} p-10 m-5 w-[800px] h-[500px] relative border-gray-700 border
                   filter grayscale hover:filter-none transition-all duration-200 ease-in-out`
                } data-aos={(index%2 === 0) ? 'fade-right' : 'fade-left'}>

                {index%2 !== 0 &&
                    <Image src={feature.image} alt={feature.title} width={500} height={500}
                           className="absolute -ml-[600px] z-0 filter grayscale hover:filter-none transition-all duration-500 ease-in-out"   />
                }

                <div className="z-10">
                    <h3 className="font-semibold text-4xl">{feature.title}</h3>
                    <p className="text-livid">{feature.description}</p>
                </div>

                {index%2 === 0 &&
                    <Image src={feature.image} alt={feature.title} width={500} height={500}
                           className="absolute -mr-[600px] z-0 filter grayscale hover:filter-none transition-all duration-500 ease-in-out" />
                }

              </div>
            ))}
        </div>

    </section>);
}

export default FeatureSection;
