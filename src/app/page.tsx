export default function Home() {
    return (
        <main className="flex justify-center text-center items-center px-auto flex-col gap-10">
            <section>
                <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Unis
                    pour la croissance</h1>
                <h4 className="text-gray-400 text-2xl font-regular">Art, développement, écriture, et bien plus
                    encore...</h4>
                <button
                    className="bg-white text-black font-medium py-2 px-4 rounded-md mt-5 shadow-lg shadow-gray-600 hover:shadow-none duration-100 ease-in-out delay-100">
                    <a href="https://discord.talent-hub.fr/" target="_blank" rel="noreferrer">Rejoindre le serveur</a>
                </button>
            </section>
            <section>
                <span className="uppercase text-gray-400 font-regular text-sm">soutenus par des personnes et projets à travers le monde</span>
                <div className="flex justify-center items-center gap-5 mt-5">
                    <img src="/images/clients/1.png" alt="client" className="w-20"/>
                    <img src="/images/clients/2.png" alt="client" className="w-20"/>
                    <img src="/images/clients/3.png" alt="client" className="w-20"/>
                    <img src="/images/clients/4.png" alt="client" className="w-20"/>
                    <img src="/images/clients/5.png" alt="client" className="w-20"/>
                    <img src="/images/clients/6.png" alt="client" className="w-20"/>
                </div>
            </section>
        </main>)
}
