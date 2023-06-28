export default function Navbar() {
    return (
        <nav className="w-full flex flex-row justify-between">
            <div>Talent Hub</div>
            <div>
                <ul className="flex flex-row justify-between gap-5">
                    <li>Blog</li>
                    <li>Offres</li>
                    <li>Trombinoscope</li>
                </ul>
            </div>
            <div>Se connecter</div>
        </nav>
    );
}