import Image from "next/image";

export default function Footer() {
    return (<footer className="border-b border-white mt-auto bg-primary text-livid">
        <div className="grid grid-cols-4 gap-4">
            <ul>
                <li>
                    <a href="/">

                        <div className="text-white font-bold text-xl flex justify-between items-center">
                            <Image src="/logo_white.png" alt="Logo de Talent Hub" width={32} height={32}/>
                            <span>
                      Talent Hub
                  </span>
                        </div>
                    </a>
                </li>
                <li>
                    <p>
                        Réunissant passionnés d'art, de développement, de musique et bien plus encore
                    </p>
                </li>
                <li>
                    <a href="https://discord.talent-hub.fr"
                       target="_blank"
                       className="mt-20 px-5 py-2 bg-white hover:bg-gray-200 rounded-xl font-semibold text-black transition-colors duration-200">
                        Rejoindre l'aventure
                    </a>
                </li>
            </ul>
            <ul>
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
            <ul>
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
                    <div className="text-livid px-5 py-3 font-semibold rounded-xl border border-livid">
                        Se connecter
                    </div>
                </a>
            </div>
        </div>
    </footer>);
}