import React from "react";
import DiscordAvatars from "@/components/_partials/sections/pole/discordAvatars.partial.component";

export default function TheySupportUsSection() {
    return (<section className="text-center flex flex-col justify-center items-center">
        <div>
            <span className="text-sm py-2 border-gray-600 border rounded-full text-livid px-6">Talents</span>

            <h2 className="text-white text-6xl font-semibold break-normal mt-14 whitespace-nowrap">
                {"Ils nous supportent"}
            </h2>

            <p className="text-livid mt-10">
                Talent Hub aspire à regrouper des personnes talentueuses et passionnées, et à les aider à réaliser leurs projets.
            </p>
        </div>

        <div className="pointer-events-none relative flex gap-10 overflow-hidden mt-10">
            <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
                <DiscordAvatars/>
            </div>
        </div>


    </section>);
}