import { GithubLogo, InstagramLogo, LinkedinLogo, List } from 'phosphor-react'
import { Logo } from './Logo'

export function Header() {
  return (
    <div className="flex justify-center">
      <nav className="flex w-[95%] justify-between items-center py-6 px-4 bg-gray-700 rounded-b-[30px] drop-shadow-lg lg:px-10">
        <section className="">
          <List className="text-gray-800 hover:brightness-50" size={26} />
        </section>
        <section className="flex justify-center">
          <Logo />
        </section>
        <section>
          <div className="flex lg:gap-2">
            <GithubLogo
              className="text-gray-800 hover:brightness-50"
              size={24}
            />
            <InstagramLogo
              className="text-gray-800 hover:brightness-50"
              size={24}
            />
            <LinkedinLogo
              className="text-gray-800 hover:brightness-50"
              size={24}
            />
          </div>
        </section>
      </nav>
    </div>
  )
}
