"use client";

import { Collapse, Text } from "@nextui-org/react";

const AdvantagesSection = () => {
    return (
        <section className="text-center flex flex-row justify-center items-center text-livid">
            <iframe src="https://discord.com/widget?id=1057360697887051806&theme=dark" width="350" height="500" allowTransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            <Collapse.Group>
                <Collapse title="Système d'offres">
                    <p>
                       Avec Talent Hub, vous pouvez bénéficier d'un système d'offre unique. Il vous permet
                       de présenter vos services de manière professionnelle et de trouver le talent idéal
                       pour vos projets. Plus qu'un simple tableau d'affichage, notre système est conçu
                       pour faciliter les interactions et la collaboration.
                    </p>
                </Collapse>
                <Collapse title="Apprentissage collaboratif">
                    <p>
                        Talent Hub propose une plateforme d'apprentissage collaboratif où les membres peuvent
                        partager leurs connaissances, poser des questions et apprendre les uns des autres. Cette
                        approche communautaire à l'apprentissage facilite un environnement d'éducation continue
                        et d'amélioration des compétences.
                    </p>
                </Collapse>
                <Collapse title="Concours et Challenges">
                    <p>
                        Pour stimuler l'innovation et la créativité, Talent Hub organise régulièrement des concours
                        et des défis de codage. Ces événements vous offrent une occasion unique de montrer vos compétences,
                        d'apprendre de nouvelles techniques et de recevoir des commentaires constructifs de la part de
                        notre communauté d'experts.
                    </p>
                </Collapse>
                <Collapse title="Réseau professionnel">
                    <p>
                        En rejoignant Talent Hub, vous accédez à un vaste réseau de développeurs et de professionnels de l'industrie.
                        C'est une excellente occasion de se connecter avec des pairs, de trouver des mentors, de collaborer sur des projets,
                        et même de découvrir de nouvelles opportunités de carrière.
                    </p>
                </Collapse>
                <Collapse title="Ressources de développement personnel">
                    <p>
                        Talent Hub ne se limite pas à la programmation. Nous mettons à disposition une variété de ressources pour le développement
                        personnel, y compris des ateliers sur les soft skills, des séances de coaching de carrière, des discussions sur le bien-être
                        mental et plus encore. Nous croyons fermement que le succès en tant que développeur va au-delà des compétences techniques.
                    </p>
                </Collapse>
            </Collapse.Group>
        </section>
    );
}

export default AdvantagesSection;
