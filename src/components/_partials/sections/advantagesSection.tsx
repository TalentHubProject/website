"use client";

import { Collapse, Text } from "@nextui-org/react";

const AdvantagesSection = () => {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ducimus expedita fugit
                itaque maxime obcaecati officia, possimus quae quaerat, quidem quis sapiente similique, totam unde vel
                veniam veritatis voluptatibus?</p>
            <Collapse.Group>
                <Collapse title="Option A">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Option B">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Option C">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
            </Collapse.Group>
        </section>
    );
}

export default AdvantagesSection;
