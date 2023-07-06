"use client";

import {Disclosure} from '@headlessui/react'

const AdvantagesSection = () => {
    return (<section
            className="flex flex-row justify-center items-center text-center space-x-10 text-livid px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-screen">
            <iframe src="https://discord.com/widget?id=1057360697887051806&theme=dark" width="350" height="500"
                    allowTransparency="true" frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

            <div className="flex flex-col">
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        Système d'offres
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        Avec Talent Hub, vous pouvez bénéficier d'un système d'offre unique. Il vous permet
                        de présenter vos services de manière professionnelle et de trouver le talent idéal
                        pour vos projets. Plus qu'un simple tableau d'affichage, notre système est conçu
                        pour faciliter les interactions et la collaboration.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        Apprentissage collaboratif
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        Talent Hub propose une plateforme d'apprentissage collaboratif où les membres peuvent
                        partager leurs connaissances, poser des questions et apprendre les uns des autres. Cette
                        approche communautaire à l'apprentissage facilite un environnement d'éducation continue
                        et d'amélioration des compétences.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        Concours et Challenges
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        Pour stimuler l'innovation et la créativité, Talent Hub organise régulièrement des concours
                        et des défis de codage. Ces événements vous offrent une occasion unique de montrer vos compétences,
                        d'apprendre de nouvelles techniques et de recevoir des commentaires constructifs de la part de
                        notre communauté d'experts.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        Réseau professionnel
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        En rejoignant Talent Hub, vous accédez à un vaste réseau de développeurs et de professionnels de
                        l'industrie.
                        C'est une excellente occasion de se connecter avec des pairs, de trouver des mentors, de collaborer
                        sur
                        des projets,
                        et même de découvrir de nouvelles opportunités de carrière.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        Ressources de développement personnel
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        Talent Hub ne se limite pas à la programmation. Nous mettons à disposition une variété de ressources
                        pour le développement
                        personnel, y compris des ateliers sur les soft skills, des séances de coaching de carrière, des
                        discussions sur le bien-être
                        mental et plus encore. Nous croyons fermement que le succès en tant que développeur va au-delà des
                        compétences techniques.
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </section>

    );
};


export default AdvantagesSection;
