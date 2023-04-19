import './globals.css'

export const metadata = {
  title: 'Talent Hub : Réunir les talents, inspirer les projets et la croissance ',
  description: 'Talent Hub, plateforme innovante de collaboration sur Discord, développement, musique, investissement et plus encore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
