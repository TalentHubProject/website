import './globals.css'
import Navbar from "@/components/navbar.component";
import {Inter} from "next/font/google";
import Providers from "@/app/providers";

export const metadata = {
    title: 'Talent Hub : Réunir les talents, inspirer les projets et la croissance ',
    description: 'Talent Hub, plateforme innovante de collaboration sur Discord, développement, musique, investissement et plus encore.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="fr" className={`${inter.className} `}>
    <body className="min-h-screen">
    <div className="grid md:grid-cols-8 gap-1 sm:grid-cols-1 p-5 bg-gradient-to-b from-gray-900 to-black">
        <div className="col-span-1"></div>
        <div className="col-start-2 col-span-6 flex-inline justify-between gap-5 ">
            <Navbar/>
            <main className="container mx-auto py-8 mt-8 h-screen flex flex-col justify-between gap-y-64">
                <Providers>
                    {children}
                </Providers>
            </main>
        </div>
        <div className="col-span-1"></div>
    </div>
    </body>
    </html>)
}
