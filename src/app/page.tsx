import Image from 'next/image'
import Contact from '@/components/Contact'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']});

export default function Home() {
    return (
        <main>
            <section id={"hero"} className={"flex justify-center items-center w-100 p-24 bg-block"}>
                <img
                    className={"max-h-72 md:max-h-96 hidden sm:block"}
                    src={"/stroke.svg"}
                    alt={"SVG"} />
                <div className={"text-center flex flex-col items-center justify-center"}>
                    <h1 className={"text-title font-bold text-5xl " + montserrat.className}>Lucas MARTINELLE</h1>
                    <h4 className={"text-title text-3xl mb-5 " + montserrat.className}>Développeur web</h4>
                    <p className={"text-white"}>Je design et développe des sites webs<br />
                    N&apos;hésitez pas à jeter un coup d&apos;oeil à mes créations !</p>
                    <a href={"#projects"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                </div>
            </section>
            <section id={"about-me"} className={"p-5 pt-16 pb-16"}>
                <div className={"md:w-2/4 m-auto md:flex md:items-center md:gap-3 rounded-xl drop-shadow-lg p-5 bg-block"}>
                    <img
                        src={"/me.jpg"}
                        alt={"Photo de moi"}
                        className={"m-auto rounded-full h-36 w-44 object-cover md:h-48 md:w-36 lg:h-52 lg:w-44 drop-shadow-lg"}
                    />
                    <div className={"text-center md:text-left md:border-l-4 md:border-primary p-3"}>
                        <h4 className={"text-title mb-3 text-2xl font-bold " + montserrat.className}>Qui suis-je ?</h4>
                        <hr className={"md:hidden bg-primary h-1 rounded mb-3"} />
                        <p className={"text-white"}>
                            En cours de cursus en Informatique à l&apos;IUT de Laval,
                            je me passionne pour le développement informatique, notamment dans le domaine du web.
                            J&apos;aime acquérir de nouvelles compétences et les mettre en pratique à travers des projets personnels
                            que je mène pendant mes études et en dehors. Si vous avez une idée que vous souhaitez concrétiser,
                            je serai ravi d&apos;échanger avec vous !</p>
                    </div>
                </div>
            </section>
            <section id={"parcours"} className={"p-5 md:flex md:justify-center md:gap-5 bg-block pt-16 pb-16"}>
                <div className={"w-100 h-max bg-background rounded-xl shadow-lg p-4"}>
                    <div className={"border-l-4 border-primary px-5"}>
                        <h4 className={"text-title font-bold text-2xl " + montserrat.className}>Parcours professionnel</h4>
                        <h6 className={"text-title font-bold text-lg"}>DIETAGRO, Château-Gontier-Sur-Mayenne 53000, Alternant développeur web<br />
                        2022-En cours</h6>
                        <ul className={"text-white list-disc ps-5"}>
                            <li>Développement du système informatisé</li>
                            <li>Optimisation des fonctionnalités existantes</li>
                            <li>Gestion des projets</li>
                            <li>Recherche et développement</li>
                            <li>Design</li>
                        </ul>
                    </div>
                </div>
                <div className={"w-100 mt-5 md:mt-0 h-max bg-background rounded-xl shadow-lg p-4"}>
                    <div className={"border-l-4 border-primary px-5"}>
                        <h4 className={"text-title font-bold text-2xl " + montserrat.className}>Parcours scolaire</h4>
                        <h6 className={"text-title font-bold text-lg"}>Lycée Bertrand D&apos;argentré, Vitré 35500, filière générale<br />
                            2019 - 2021</h6>
                        <ul className={"text-white list-disc ps-5"}>
                            <li>Spécialité : Mathématique</li>
                            <li>Spécialité : Informatique</li>
                        </ul>
                        <br />
                        <h6 className={"text-title font-bold text-lg"}>IUT De Laval, LAVAL 53000, département informatique<br />
                            2021 - En cours</h6>
                        <ul className={"text-white list-disc ps-5"}>
                            <li>Réaliser un développement d&apos;application</li>
                            <li>Optimiser des applications informatiques</li>
                            <li>Administrer des systèmes informatiques communicants complexes</li>
                            <li>Gérer des données de l&apos;information</li>
                            <li>Conduire un projet</li>
                            <li>Travailler dans une équipe informatique</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id={"projects"} className={"p-5 flex justify-center gap-5 bg-background pt-16 pb-16"}>
                <div className={"bg-block rounded-xl shadow-lg p-4"}>
                    <h4 className={"text-title font-bold text-2xl " + montserrat.className}>Mes projets</h4>
                    <p className={"text-white mb-3"}>
                        Les projets suivants m&apos;ont permis de développer les compétences présentées plus haut.
                        N&apos;hésitez pas à me faire part de vos conseils ou suggestions, toute amélioration est bonne à prendre!
                    </p>
                    <div className={"flex flex-wrap gap-3"}>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner rounded-xl"}>
                                <img src={"/fetcherREP.png"} alt={"Fetcher REP"} className={"object-contain rounded-t-xl"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>FetcherREP</h6>
                                <p className={"text-white mb-3"}>FetcherREP est une plateforme conçue pour récupérer, enregistrer et afficher les rapports issus de la plateforme Hackerone. Ce projet a été développé en utilisant Bootstrap, Next.js et Prisma.</p>
                                <a href={"https://github.com/lucasmartinelle/fetcherRep"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner"}>
                                <img src={"/portfolio.png"} alt={"Fetcher REP"} className={"object-contain rounded-t-xl"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>Portfolio</h6>
                                <p className={"text-white mb-3"}>Vous êtes actuellement dessus ! Ce projet a été développé à l&apos;aide de TailWind CSS et Next.js</p>
                                <a href={"https://github.com/lucasmartinelle/Portfolio"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"contact"} className={"p-5 flex justify-center gap-5 bg-block pt-16 pb-16"}>
                <div className={"bg-background rounded-xl shadow-lg p-4 max-w-xl"}>
                    <h4 className={"text-title font-bold text-2xl " + montserrat.className}>Me contacter</h4>
                    <p className={"text-white mb-3"}>
                        Vous souhaitez m&apos;envoyer un message, me faire une suggestion ou m&apos;alerter d’un problème ? N&apos;hésitez pas à le faire ci-dessous !
                    </p>
                    <Contact />
                </div>
            </section>
            <section id={"copyright"} className={"text-white font-bold text-center py-3"}>
                Copyright © Lucas MARTINELLE, 2023
            </section>
        </main>
    )
}
