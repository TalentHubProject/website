import './global.css'

import Navbar from "@/components/navbar.component";

import {Inter} from 'next/font/google'

export const metadata = {
    title: 'Talent Hub : Réunir les talents, inspirer les projets et la croissance ',
    description: 'Talent Hub, plateforme innovante de collaboration sur Discord, développement, musique, investissement et plus encore.',
}

const inter = Inter({subsets: ['latin', 'cyrillic-ext']});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="fr">
    <body>
    <main className={`{inter.className} bg-primary h-screen`}>
        <Navbar/>
        {children}
    </main>
    </body>
    </html>)
}
