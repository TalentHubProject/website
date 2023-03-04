import React from "react";
import {Card, Col, Grid, Text} from "@nextui-org/react";

export default function CardPresentationHeroPartial() {
    return (<>
        <section>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} md={6}>
                    <Card css={{w: "100%"}}>
                        <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Plant a tree
                                </Text>
                                <Text h4 color="white">
                                    Contribute to the planet
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://placeimg.com/640/480/any"
                            width="100%"
                            height={340}
                            objectFit="cover"
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} md={6}>
                    <Card css={{ w: "100%" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Plant a tree
                                </Text>
                                <Text h4 color="white">
                                    Contribute to the planet
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://placeimg.com/640/480/any"
                            width="100%"
                            height={340}
                            objectFit="cover"
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} md={6}>
                    <Card css={{ w: "100%" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Plant a tree
                                </Text>
                                <Text h4 color="white">
                                    Contribute to the planet
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://placeimg.com/640/480/any"
                            width="100%"
                            height={340}
                            objectFit="cover"
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
            </Grid.Container>
        </section>
    </>)
}