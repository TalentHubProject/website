'use client';

import NavbarComponent from "@/app/components/NavbarComponent";

import React from "react";
import JoinPresentationHeroPartial from "@/app/__partials/JoinPresentationHeroPartial";
import ImagePresentationHeroPartial from "@/app/__partials/ImagePresentationHeroPartial";
import CardPresentationHeroPartial from "@/app/__partials/CardPresentationHeroPartial";

export default function Page() {
    return (
        <>
            <NavbarComponent/>

            <div className={"container mx-auto flex flex-col gap-96"}>
                <JoinPresentationHeroPartial/>
                <ImagePresentationHeroPartial />
                <CardPresentationHeroPartial />
            </div>
        </>
    )
}