import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full flex flex-row justify-between px-10 py-5">
            <div className="text-white font-bold text-xl flex justify-between items-center">
                <Image src="/logo_white.png" alt="Logo de Talent Hub" width={32} height={32} />
                <span>
                    Talent Hub
                </span>
            </div>
            <div>
                <ul className="flex flex-row justify-between gap-5 text-livid">
                    <li>Blog</li>
                    <li>Offres</li>
                    <li>Trombinoscope</li>
                </ul>
            </div>
            <div className="bg-white text-black p-3 font-semibold rounded-xl">
                Se connecter
            </div>
        </nav>
    );
}