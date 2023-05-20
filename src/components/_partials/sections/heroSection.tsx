import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex justify-between items-center lg:flex-row md:flex-row sm:flex-col">
            <div className="flex items-start justify-start flex-col gap-20 break-words text-left sm:flex-1">
                <h1 className="font-semibold text-6xl">Talent Hub Collaboration et créativité</h1>
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

            <div className="sm:flex-0">
                <Image src="/discord-platform.png" alt="Overview of the discord server" width={700} height={700}/>
            </div>
        </section>
    );
}