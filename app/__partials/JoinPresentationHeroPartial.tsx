import React from "react";
import Link from "next/link";

export default function JoinPresentationHeroPartial() {
    return (
        <section className={"flex items-center justify-center flex-col gap-2 max-w-2xl mx-auto text-center"}>
            <h1 className={"text-5xl font-bold mb-5"}>Talent Hub is not only a community, but above all, a family</h1>
            <span className={"text-gray-400 mb-3"}>
                Building collaborative mini-hubs in various areas of expertise to foster mutual learning and project creatiion.
            </span>
            <a href={"https://discord.gg/RvjSrJD5mj"} className={"bg-purple-500 px-4 py-1 rounded-full"}>Join us </a>
        </section>
    )
}