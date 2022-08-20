import { Header } from '../Components/Header'
import img from '../Assets/Emoji.svg'

export function Home() {
  return (
    <div className="">
      <header className="w-full">
        <Header />
      </header>
      <main className="w-full flex justify-center">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[85%] lg:w-[100%] md:flex">
            <img className="md:w-[50%]" src={img} />

            <div className="md:w-1/2 flex justify-center">
              <div className="w-[80%] flex flex-col justify-center md:mt-[-150px] lg:w-full lg:mt-[-300px]">
                <span className="title mb-2 lg:text-6xl">Adryan Santos</span>
                <span className="subtitle lg:text-4xl">Desenvolvedor</span>
                <span className="subtitle lg:text-4xl">Front-end</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
