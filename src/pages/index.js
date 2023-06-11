import Navbar from './components/Navbar'
import Menu from './components/Menu'
import gridData from './components/gridData'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-between bg-gray-800">
          <Navbar />
          <Menu />
          <gridData />
      </main>
  );
}
