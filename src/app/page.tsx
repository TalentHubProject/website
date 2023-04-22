import styles from "./page.module.css";

export default function Home() {
    return (
        <section className="flex justify-center text-center items-center px-auto flex-col h-full">
        <div className="inline-flex flex-col justify-around h-full">
            <div>
                <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Talent
                    Hub : Collaboration et Créativité</h1>
                <h4 className="text-gray-400 text-2xl font-regular">Réunissant passionnés d'art, de développement, de
                    musique et bien plus encore</h4>
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

            <a href="" className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-mouse">
                    <rect width="12" height="18" x="6" y="3" rx="6"></rect>
                    <path d="M12 7v4" className={styles.mouse}></path>
                </svg>
            </a>

        </div>
    </section>)
}
