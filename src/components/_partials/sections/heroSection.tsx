import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="h-screen grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start justify-center flex-col gap-20 break-words text-left col-start-1">
                <h1 className="font-medium text-6xl">Talent Hub Collaboration et créativité</h1>
                <h2 className="text-livid text-xl">Réunissant passionés d'art, de développement, de musique et bien plus
                    encore</h2>

                <div className="inline-flex justify-start items-center gap-5">
                    <button className="bg-white text-black py-4 px-6 rounded-xl font-semibold">Rejoindre l'aventure
                    </button>
                    <button className="bg-black text-white py-4 px-12 rounded-xl font-semibold border border-white">Se
                        connecter
                    </button>
                </div>
            </div>

            <div className="col-start-2 col-span-3">
                <Image
                    src="/discord-platform.png"
                    alt="Overview of the discord server"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </section>
    );
}