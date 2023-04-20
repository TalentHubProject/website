import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={styles} className="rad">
      <Image src="hero-illustration.svg" alt="Splash" width={500} height={500} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda atque distinctio eaque, eius harum
        inventore iste, magnam nemo optio perferendis ratione repellat velit veniam voluptas! Id necessitatibus numquam
        quam.</p>
    </main>
  )
}
