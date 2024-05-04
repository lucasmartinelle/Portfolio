import Image from 'next/image'
import Contact from '@/components/Contact'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']});

export default function Home() {
    return (
        <main>
            <section id={"hero"} className={"flex justify-center items-center w-100 p-24 bg-block"}>
                <Image
                    className={"max-h-72 md:max-h-96 hidden sm:block w-fit"}
                    src={"/stroke.svg"}
                    alt={"SVG"}
                    width={"1024"}
                    height={"1024"} />
                <div className={"text-center flex flex-col items-center justify-center"}>
                    <h1 className={"text-title font-bold text-5xl " + montserrat.className}>Lucas MARTINELLE</h1>
                    <h4 className={"text-title text-3xl mb-6 " + montserrat.className}>Développeur web et mobile</h4>
                    <p className={"text-white"}>Je design et développe des sites webs<br />
                    N&apos;hésitez pas à jeter un coup d&apos;oeil à mes créations !</p>
                    <a href={"#projects"} className={"bg-primary p-3 py-1 rounded-sm text-background max-w-fit mt-6 flex gap-2 items-center"}>
                        En savoir plus
                    </a>
                </div>
            </section>
            <section id={"about-me"} className={"p-5 pt-16 pb-16"}>
                <div className={"sm:w-2/3 xl:w-2/4 lg:w-3/4 m-auto md:flex md:items-center md:gap-3 rounded-xl drop-shadow-lg p-8 bg-block"}>
                    <Image
                        src={"/me.jpg"}
                        alt={"Photo de moi"}
                        className={"m-auto rounded-full h-36 w-44 object-cover md:h-48 md:w-36 lg:h-52 lg:w-44 drop-shadow-lg"}
                        width={"1024"}
                        height={"1024"}
                    />
                    <div className={"text-center md:text-left p-3"}>
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
            <section id={"parcours"} className={"p-5 lg:flex md:justify-center md:gap-16 bg-block pt-16 pb-16"}>
                <div className={"m-auto lg:m-0 md:w-100 h-max bg-background rounded-xl shadow-lg p-8 mt-8"}>
                    <h4 className={"flex items-center gap-2 text-title font-bold text-2xl " + montserrat.className}>
                        <span className="material-symbols-outlined">
                            group
                        </span>
                        Parcours professionnel</h4>
                    <ol className="relative border-s-4 border-primary mt-4">
                        <li className="mb-10 ms-6">
                            <span
                                className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 p-1 bg-white"
                            >&nbsp;</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-title">
                                DIETAGRO - Développement, Optimisation et Modernisation de l&apos;ERP
                            </h3>
                            <time
                                className="block mb-2 text-sm font-normal leading-none text-title">
                                53200 CHATEAU-GONTIER, Développeur en alternance, 2022 - 2024
                            </time>
                            <ul className={"text-white list-disc ps-5"}>
                                <li>Développement de nouvelles fonctionnalités</li>
                                <li>Optimisation des fonctionnalités existantes</li>
                                <li>Gestion des différents projets informatiques</li>
                                <li>Gestion du parc informatique</li>
                                <li>Administration système</li>
                                <li>Recherche et développement</li>
                                <li>Design</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className={"m-auto lg:m-0 md:w-100 h-max bg-background rounded-xl shadow-lg p-8 mt-8"}>
                    <h4 className={"flex items-center gap-2 text-title font-bold text-2xl " + montserrat.className}>
                        <span className="material-symbols-outlined">
                            book
                        </span>
                        Parcours scolaire
                    </h4>
                    <ol className="relative border-s-4 border-primary mt-4">
                        <li className="mb-10 ms-6">
                            <span
                                className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 p-1 bg-white"
                            >&nbsp;</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-title">
                                IUT De Laval
                            </h3>
                            <time
                                className="block mb-2 text-sm font-normal leading-none text-title">
                                53000 LAVAL, Département informatique, 2021 - 2024
                            </time>
                            <ul className={"text-white list-disc ps-5"}>
                                <li>Réaliser un développement d&apos;application</li>
                                <li>Optimiser des applications informatiques</li>
                                <li>Administrer des systèmes informatiques communicants complexes</li>
                                <li>Gérer des données de l&apos;information</li>
                                <li>Conduire un projet</li>
                                <li>Travailler dans une équipe informatique</li>
                            </ul>
                        </li>
                        <li className="mb-10 ms-6">
                            <span
                                className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 p-1 bg-white"
                            >&nbsp;</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-title">
                                Lycée Bertrand D&apos;Argentré
                            </h3>
                            <time
                                className="block mb-2 text-sm font-normal leading-none text-title">
                                35550 VITRE, Filière générale, 2018 - 2021
                            </time>
                            <ul className={"text-white list-disc ps-5"}>
                                <li>Spécialité : Mathématiques</li>
                                <li>Spécialité : Numérique et Science Informatique</li>
                                <li>Mention : Bien</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>
            <section id={"projects"} className={"p-5 flex justify-center gap-5 bg-background pt-16 pb-16"}>
                <div className={"bg-block rounded-xl shadow-lg p-12"}>
                    <h4 className={"text-title font-bold text-2xl " + montserrat.className}>Mes projets</h4>
                    <p className={"text-white mb-3"}>
                        Les projets suivants m&apos;ont permis de développer mes compétences.<br />
                        N&apos;hésitez pas à me faire part de vos conseils ou suggestions, toute amélioration est bonne à prendre!
                    </p>
                    <div className={"flex flex-wrap justify-around items-start gap-8"}>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner"}>
                                <Image src={"/bountyDashboard.png"} alt={"Bounty Dashboard"} className={"object-contain rounded-t-xl"} width={"1024"} height={"1024"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>BountyDashboard - 2021</h6>
                                <p className={"text-white mb-3"}>Bounty Dashboard est une plateforme d&apos;enregistrement de rapport au format Markdown pour le BugBounty. Ce projet a été réalisé à l&apos;aide du framework PHP : Symfony</p>
                                <a href={"https://github.com/lucasmartinelle/Bounty-Dashboard"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner"}>
                                <Image src={"/univAgenda.jpg"} alt={"Univ Agenda"} className={"object-contain rounded-t-xl"} width={"1024"} height={"1024"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>UnivAgenda - 2022</h6>
                                <p className={"text-white mb-3"}>UnivAgenda est une plateforme développée à l&apos;aide de Flutter pour récupérer un calendrier à partir d&apos;une URL est afficher en temps réel les informations relatives à mes cours universitaires.</p>
                                <a href={"https://github.com/lucasmartinelle/UnivAgenda"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner rounded-xl"}>
                                <Image src={"/fetcherREP.png"} alt={"Fetcher REP"} className={"object-contain rounded-t-xl"} width={"1024"} height={"1024"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>FetcherREP - 2023</h6>
                                <p className={"text-white mb-3"}>FetcherREP est une plateforme conçue pour récupérer, enregistrer et afficher les rapports issus de la plateforme Hackerone. Ce projet a été développé en utilisant Bootstrap, Next.js et Prisma.</p>
                                <a href={"https://github.com/lucasmartinelle/fetcherRep"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner"}>
                                <Image src={"/portfolio.png"} alt={"Fetcher REP"} className={"object-contain rounded-t-xl"} width={"1024"} height={"1024"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>Portfolio - 2024</h6>
                                <p className={"text-white mb-3"}>Vous êtes actuellement dessus ! Ce projet a été développé à l&apos;aide de TailWind CSS et Next.js</p>
                                <a href={"https://github.com/lucasmartinelle/Portfolio"} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>En savoir plus</a>
                            </div>
                        </div>
                        <div className={"card w-72 bg-background rounded-xl h-max mt-3 border-background border-2"}>
                            <div className={"project-banner"}>
                                <Image src={"/roseliabijoux.png"} alt={"Rosélia Bijoux"} className={"object-contain rounded-t-xl"} width={"1024"} height={"1024"} />
                            </div>
                            <div className={"project-body text-center py-5 px-2"}>
                                <h6 className={"text-lg text-title font-bold mb-3"}>Rosélia Bijoux - 2024</h6>
                                <p className={"text-white mb-3"}>Rosélia Bijoux est un site e-commerce développé à l&apos;aide du CMS Wordpress et du plugin WooCommerce.</p>
                                <a href={""} target={"_BLANK"} className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>A venir...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"contact"} className={"p-5 lg:flex lg:justify-center gap-8 bg-block pt-16 pb-16"}>
                <div className={"m-auto lg:m-0 mt-5 bg-background rounded-xl shadow-lg p-8 max-w-xl h-fit break-all"}>
                    <div className={"flex items-center gap-3"}>
                        <span className="material-symbols-outlined bg-primary rounded-full p-2">
                            mail
                        </span>
                        <a className={"text-white"}
                           href={"mailto:lucasmar.martinelle@gmail.com"}>lucasmar.martinelle@gmail.com</a>
                    </div>
                    <div className={"flex items-center gap-3 mt-5"}>
                        <span className="material-symbols-outlined bg-primary rounded-full p-2">
                            phone
                        </span>
                        <a className={"text-white"}
                           href={"tel:+33610440180"}>06.10.44.01.80</a>
                    </div>
                    <div className={"flex items-center gap-3 mt-5"}>
                        <span className="material-symbols-outlined bg-primary rounded-full p-2">
                            house
                        </span>
                        <a className={"text-white"}>9 Rue Madame De Sévigné<br />53000 LAVAL</a>
                    </div>
                </div>
                <div className={"m-auto lg:m-0 mt-5 bg-background rounded-xl shadow-lg p-8 max-w-xl"}>
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
