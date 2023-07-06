import Image from "next/image";

export default function Footer() {
    return (<footer className="mt-auto bg-primary text-livid mx-20 border-b border-white">
        <div className="items-stretch grid grid-cols-4 gap-20">
            <ul className="mb-20 flex flex-col flex-grow">
                <li className="flex flex-col gap-5">
                    <a href="/">
                        <div className="text-white font-bold text-3xl inline-flex justify-between items-center">
                            <Image src="/logo_white.png" alt="Logo de Talent Hub" width={64} height={64}/>
                            <span>
                                Talent Hub
                            </span>
                        </div>
                    </a>
                    <p>
                        Réunissant passionnés d'art, de développement, de musique et bien plus encore
                    </p>
                    <a href="https://discord.talent-hub.fr"
                       target="_blank"
                       className="px-5 py-2 bg-white hover:bg-gray-200 rounded-xl font-semibold text-black transition-colors duration-200 self-start">
                        Rejoindre l'aventure
                    </a>
                </li>
            </ul>
            <ul className="flex flex-col flex-grow gap-5">
                <li>
                    <h3 className="text-xl text-white font-semibold mb-5">Acceuil</h3>
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Offres
                </li>
                <li>
                    Trombinoscope
                </li>
            </ul>
            <ul className="flex flex-col flex-grow gap-5">
                <li>
                    <h3 className="text-xl text-white font-semibold mb-5">Retrouvez-nous</h3>
                </li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Discord</li>
            </ul>
            <div>
                <a href="#">
                    <div className="text-livid px-5 py-3 font-semibold rounded-3xl border border-livid inline-block">
                        Se connecter
                    </div>
                </a>
            </div>
        </div>
    </footer>);
}