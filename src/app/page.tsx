import Image from 'next/image'

import threads from '@/assets/threads.svg'

import { HomeIcon, Search, User, PenSquare, Heart } from 'lucide-react'
import Link from 'next/link'

const menus = [
  {
    Icon: HomeIcon,
    alt: 'Sua página Inicial',
    route: '/',
  },

  {
    Icon: Search,
    alt: 'Pesquise coisas do seu interesse',
    route: '/search',
  },

  {
    Icon: PenSquare,
    alt: 'O que você anda pensando?',
    route: '/post',
  },

  {
    Icon: Heart,
    alt: 'Atividades',
    route: '/activity',
  },

  {
    Icon: User,
    alt: 'Seu Perfil',
    route: '/profile',
  },
]

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between py-1 px-6">
        <Image src={threads} alt="" height={32} />
        <ul className="flex">
          {menus.map((menu) => (
            <li
              title={menu.alt}
              key={menu.route}
              className="px-7 py-5 rounded-xl hover:bg-neutral-800 transition-all ease-in-out duration-300"
            >
              <Link href={menu.route}>
                <menu.Icon size={28} className="text-neutral-600" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
