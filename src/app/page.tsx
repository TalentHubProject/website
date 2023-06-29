import HeroSection from "@/components/_partials/sections/heroSection";
import FeatureSection from "@/components/_partials/sections/featureSection";
import SponsorSection from "@/components/_partials/sections/sponsorSection";
import PoleSection from "@/components/_partials/sections/poleSection";
import AdvantagesSection from "@/components/_partials/sections/advantagesSection";

export default function Page() {
    return (
        <div className="grid place-items-center p-20 gap-10">
            <div className="max-w-xl w-full p-10 flex flex-col justify-between gap-y-40">
                <HeroSection/>
                <SponsorSection/>
                <FeatureSection/>
                <PoleSection />
                <AdvantagesSection/>
            </div>
        </div>
    );
}