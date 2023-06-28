export default function Navbar() {
    return (
        <nav className="w-full flex flex-row justify-between">
            <div className="text-livid">Talent Hub</div>
            <div>
                <ul className="flex flex-row justify-between gap-5 text-livid">
                    <li>Blog</li>
                    <li>Offres</li>
                    <li>Trombinoscope</li>
                </ul>
            </div>
            <div className="text-livid">Se connecter</div>
        </nav>
    );
}