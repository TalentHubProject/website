import styles from "./page.module.css";
import Image from "next/image";
import {Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription} from "@/components/ui/card";

export default function Home() {
    return (<>
        <section className="flex justify-center text-center items-center px-auto flex-col h-full mt-32">

            <div className="inline-flex flex-col justify-around h-full gap-20">

                <div>
                    <h1 className={`font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 ${styles.spotlight}`}>Talent
                        Hub : Collaboration et Créativité</h1>
                    <h4 className="text-gray-400 text-2xl font-regular mt-5">Réunissant passionnés d'art, de
                        développement, de
                        musique et bien plus encore</h4>
                    <button
                        className="bg-white text-black font-medium py-2 px-6 rounded-full shadow-lg shadow-gray-600 hover:shadow-none duration-100 ease-in-out delay-100 mt-10">
                        <a href="https://discord.talent-hub.fr/" target="_blank" rel="noreferrer">Rejoindre
                            l'aventure</a>
                    </button>
                </div>

                <div className="text-center flex justify-center w-full">
                    <Image src="/mockup.png" alt="Talent Hub's discord overview" width={800} height={500}/>
                </div>

                <div>
                    <span className="uppercase text-gray-400 font-regular text-sm">soutenu par des personnes et projets à travers le monde</span>
                    <div className="flex justify-center items-center gap-14 mt-5">
                        <img src="/sponsors/elkir.png" alt="Associatiion Elkir" className="h-12"/>
                        <img src="/sponsors/lljs.png" alt="Les laboratoires" className="h-12 fill-white"/>
                        <img src="/sponsors/ltdd.png" alt="La taverne du design" className="h-12"/>
                    </div>
                </div>

                <a href="" className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-mouse">
                        <rect width="12" height="18" x="6" y="3" rx="6"></rect>
                        <path d="M12 7v4" className={styles.mouse}></path>
                    </svg>
                </a>

            </div>
        </section>
        <section>

            <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Une communauté unique</h1>
            <p className="text-livid mt-5 text-center">Fondée sur l'entraide et la collaboration, nous privilégions la générosité et l'humanité, rejetant l'opportunisme pour créer des liens authentiques.</p>

            <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-10">
                <div className="col-span-2 row-span-1">
                    <Card className="bg-background text-foreground h-full">
                        <CardHeader>
                            <Image src="/mockup.png" alt="Talent Hub's discord overview" width={800} height={500}/>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="font-bold text-2xl">Communauté professionelle et conviviale</CardTitle>
                            <CardDescription>Connectez-vous avec des individus compétents et engagés dans divers domaines.</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1 row-span-1">
                    <Card className="bg-background text-foreground h-full">
                        <CardContent className="flex items-center justify-center flex-col h-full">
                            <CardTitle className="text-2xl font-bold text-center">Développement des compétences</CardTitle>
                            <CardDescription>Améliroez vos aptitudes et élargissez vos conaissances grâce à des collaborations enrichissantes.</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1 row-span-1">
                    <Card className="bg-background text-foreground h-full">
                        <CardContent className="flex items-center justify-center flex-col h-full">
                            <CardTitle className="text-2xl font-bold">Projets collaboratifs</CardTitle>
                            <CardDescription>Participez à des initiatives novatrices et passionnantes au sein d'équipes dynamiques</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-2 row-span-1">
                    <Card className="bg-background text-foreground h-100">
                        <CardHeader>
                            <Image src="/mockup.png" alt="Talent Hub's discord overview" width={800} height={500}/>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-2xl font-bold">Atmoshère conviviale</CardTitle>
                            <CardDescription>Profitez d'un environnement bienveillant et chalereux pour vous épanouir et vous développer.</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </section>

        <section>
            <h1 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 ">Les différents pôles</h1>
            <p className="mt-5 text-livid">Talent hub propose des pôles spécialisés. Cela permet d'améliorer le processus d'acquisition de talents et d'augmenter la qualité de la procédure de recrutement. Mais surtout de renforcer les différents liens qui nous unissent.</p>
            <div className="mt-10 grid grid-cols-2 grid-rows-3 gap-10">
                <div className="col-span-1 row-span-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dignissimos eum
                        explicabo ipsam laboriosam mollitia nostrum optio provident qui. Cupiditate enim eum explicabo
                        impedit itaque molestias neque possimus reiciendis?</p>
                </div>
                <div className="col-span-1 row-span-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto deserunt distinctio
                        eos expedita facilis harum incidunt magnam minima natus neque nobis nostrum officia provident
                        qui, quis, rerum, ut vel!</p>
                </div>
                <div className="col-span-1 row-span-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur consequuntur,
                        culpa dicta dolorem ducimus expedita fuga illum magnam, nam quasi qui quo repellendus similique
                        suscipit temporibus veniam! Alias, saepe.</p>
                </div>
                <div className="col-span-1 row-span-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur corporis cumque ducimus
                        eius eligendi excepturi expedita ipsa libero, minus nostrum quod reiciendis reprehenderit sit
                        soluta temporibus ullam voluptates voluptatibus!</p>
                </div>
                <div className="col-span-1 row-span-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse ex exercitationem fugit
                        id iste itaque iure maxime minima nisi, quae quo saepe, sunt tenetur unde. Corporis sequi velit
                        voluptatem!</p>
                </div>
            </div>
        </section>
    </>)
}
