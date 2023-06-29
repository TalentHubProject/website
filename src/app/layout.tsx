import './global.css'

import Navbar from "@/components/navbar.component";

import {Poppins} from 'next/font/google'

export const metadata = {
    title: 'Talent Hub : Réunir les talents, inspirer les projets et la croissance ',
    description: 'Talent Hub, plateforme innovante de collaboration sur Discord, développement, musique, investissement et plus encore.',
}

const inter = Poppins({weight: '400', subsets: ['latin-ext'], display: 'swap'});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="fr" className="scroll-smooth">
    <body className="bg-primary">
    <link rel="icon" href="/favicon.ico" sizes="any"/>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
    <main className={`{inter.className} h-screen`}>
        <Navbar/>
        {children}
    </main>
    </body>
    </html>)
}
