import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full flex flex-row justify-between px-20 py-10">
            <div className="text-white font-bold text-xl flex justify-between items-center">
                <Image src="/logo_white.png" alt="Logo de Talent Hub" width={32} height={32} />
                <span>
                    Talent Hub
                </span>
            </div>
            <div>
                <ul className="flex flex-row justify-between gap-10 font-semibold text-livid">
                  <li><a className="transition-colors duration-200 hover:text-indigo-600" href="#">Blog</a></li>
                  <li><a className="transition-colors duration-200 hover:text-indigo-600" href="#">Offres</a></li>
                  <li><a className="transition-colors duration-200 hover:text-indigo-600" href="#">Trombinoscope</a></li>
                </ul>
            </div>
            <div className="bg-white text-black px-5 py-3 font-semibold rounded-xl">
                Se connecter
            </div>
        </nav>
    );
}