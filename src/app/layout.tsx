import './globals.css'
import Navbar from "@/components/navbar.component";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata = {
    title: 'Talent Hub : Réunir les talents, inspirer les projets et la croissance ',
    description: 'Talent Hub, plateforme innovante de collaboration sur Discord, développement, musique, investissement et plus encore.',
    themeColor: [{media: "(prefers-color-scheme: light)", color: "white"}, {
        media: "(prefers-color-scheme: dark)", color: "black"
    },],
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="fr" className={inter.className}>
    <body className="min-h-screen bg-primary">
    <ClerkProvider>
        <div className="container mx-auto py-8">
            <Navbar/>
            {children}
        </div>
    </ClerkProvider>
    </body>
    </html>)
}
