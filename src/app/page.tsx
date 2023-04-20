import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <main className="flex justify-center text-center items-center px-auto">
      <section>
        <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Unis pour la croissance</h1>
        <h4 className="text-gray-400 text-2xl font-regular">Art, développement, écriture, et bien plus encore...</h4>
      </section>
    </main>
  )
}
