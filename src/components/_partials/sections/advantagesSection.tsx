"use client";

import { Collapse, Text } from "@nextui-org/react";

const AdvantagesSection = () => {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ducimus expedita fugit
                itaque maxime obcaecati officia, possimus quae quaerat, quidem quis sapiente similique, totam unde vel
                veniam veritatis voluptatibus?</p>
            <Collapse.Group>
                <Collapse title="Système d'offres">
                    <Text>
                       Avec Talent Hub, vous pouvez bénéficier d'un système d'offre unique. Il vous permet
                       de présenter vos services de manière professionnelle et de trouver le talent idéal
                       pour vos projets. Plus qu'un simple tableau d'affichage, notre système est conçu
                       pour faciliter les interactions et la collaboration.
                    </Text>
                </Collapse>
                <Collapse title="Apprentissage collaboratif">
                    <Text>
                        Talent Hub propose une plateforme d'apprentissage collaboratif où les membres peuvent
                        partager leurs connaissances, poser des questions et apprendre les uns des autres. Cette
                        approche communautaire à l'apprentissage facilite un environnement d'éducation continue
                        et d'amélioration des compétences.
                    </Text>
                </Collapse>
                <Collapse title="Concours et Challenges">
                    <Text>
                        Pour stimuler l'innovation et la créativité, Talent Hub organise régulièrement des concours
                        et des défis de codage. Ces événements vous offrent une occasion unique de montrer vos compétences,
                        d'apprendre de nouvelles techniques et de recevoir des commentaires constructifs de la part de
                        notre communauté d'experts.
                    </Text>
                </Collapse>
                <Collapse title="Réseau professionnel">
                    <Text>
                        En rejoignant Talent Hub, vous accédez à un vaste réseau de développeurs et de professionnels de l'industrie.
                        C'est une excellente occasion de se connecter avec des pairs, de trouver des mentors, de collaborer sur des projets,
                        et même de découvrir de nouvelles opportunités de carrière.
                    </Text>
                </Collapse>
                <Collapse title="Ressources de développement personnel">
                    <Text>
                        Talent Hub ne se limite pas à la programmation. Nous mettons à disposition une variété de ressources pour le développement
                        personnel, y compris des ateliers sur les soft skills, des séances de coaching de carrière, des discussions sur le bien-être
                        mental et plus encore. Nous croyons fermement que le succès en tant que développeur va au-delà des compétences techniques.
                    </Text>
                </Collapse>
            </Collapse.Group>
        </section>
    );
}

export default AdvantagesSection;
