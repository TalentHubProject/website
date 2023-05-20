import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex justify-between items-center">
            <div className="flex items-start justify-start flex-col gap-20 break-words text-left">
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

            <div>
                <Image src="/discord-platform.png" alt="Overview of the discord server" width={1000} height={1000}/>
            </div>
        </section>
    );
}