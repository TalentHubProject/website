export default function Home() {
    return (<section className="flex justify-center text-center items-center px-auto flex-col h-full">
        <div className="inline-flex flex-col justify-around h-full">
            <div>
                <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Talent Hub : Collaboration et Créativité</h1>
                <h4 className="text-gray-400 text-2xl font-regular">Réunissant passionnés d'art, de développement, de musique et bien plus encore</h4>
                <button
                    className="bg-white text-black font-medium py-2 px-4 rounded-md shadow-lg shadow-gray-600 hover:shadow-none duration-100 ease-in-out delay-100 mt-10">
                    <a href="https://discord.talent-hub.fr/" target="_blank" rel="noreferrer">Rejoindre l'aventure</a>
                </button>
            </div>

            <div>
                <span className="uppercase text-gray-400 font-regular text-sm">soutenu par des personnes et projets à travers le monde</span>
                <div className="flex justify-center items-center gap-14 mt-5">
                    <img src="/sponsors/elkir.png" alt="Associatiion Elkir" className="h-12"/>
                    <img src="/sponsors/lljs.png" alt="Les laboratoires" className="h-12 fill-white"/>
                    <img src="/sponsors/ltdd.png" alt="La taverne du design" className="h-12"/>
                </div>
            </div>
        </div>
    </section>)
}
