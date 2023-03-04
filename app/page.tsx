'use client';

import NavbarComponent from "@/app/components/NavbarComponent";

import React from "react";
import JoinPresentationHeroPartial from "@/app/__partials/JoinPresentationHeroPartial";

export default function Page() {
    return (
        <>
            <NavbarComponent/>

            <div className={"container mx-auto"}>
                <JoinPresentationHeroPartial/>
            </div>
        </>
    )
}