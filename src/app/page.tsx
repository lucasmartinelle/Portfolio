import Image from 'next/image'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']});

export default function Home() {
  return (
    <main>
      <section id={"hero"} className={"flex justify-center items-center w-100 px-4 bg-block"}>
        <img
            className={"max-h-96"}
            src={"/stroke.svg"}
            alt={"SVG"} />
        <div className={"text-center flex flex-col items-center justify-center"}>
          <h1 className={"text-title font-bold text-5xl " + montserrat.className}>Lucas MARTINELLE</h1>
          <h4 className={"text-title text-3xl mb-5 " + montserrat.className}>Développeur web</h4>
          <p className={"text-white"}>Je design et développe des sites webs<br />
          N'hésitez pas à jeter un coup d'oeil à mes créations !</p>
          <button className={"bg-primary p-3 rounded max-w-fit mt-5"}>En savoir plus</button>
        </div>
      </section>
    </main>
  )
}
