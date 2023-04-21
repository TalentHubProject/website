export default function Home() {
    return (
        <main className="flex justify-center text-center items-center px-auto flex-col gap-10">
            <section>
                <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Unis
                    pour la croissance</h1>
                <h4 className="text-gray-400 text-2xl font-regular">Art, développement, écriture, et bien plus
                    encore...</h4>
                <button
                    className="bg-white text-black font-medium py-2 px-4 rounded-md mt-5 shadow-lg shadow-gray-600 hover:shadow-none duration-100 ease-in-out delay-100 mt-10">
                    <a href="https://discord.talent-hub.fr/" target="_blank" rel="noreferrer">Rejoindre le serveur</a>
                </button>
            </section>
            <section>
                <span className="uppercase text-gray-400 font-regular text-sm">soutenu par des personnes et projets à travers le monde</span>
                <div className="flex justify-center items-center gap-5 mt-5">
                    <img src="/sponsors/elkir.png" alt="Associatiion Elkir" className="h-20"/>
                    <img src="/sponsors/lljs.png" alt="client" className="h-20 fill-white"/>
                    <img src="/sponsors/ltdd.png" alt="client" className="h-20"/>
                </div>
            </section>
        </main>)
}
