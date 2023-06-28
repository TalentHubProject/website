import HeroSection from "@/components/_partials/sections/heroSection";
import FeatureSection from "@/components/_partials/sections/featureSection";
import SponsorSection from "@/components/_partials/sections/sponsorSection";

export default function Page() {
    return (
        <div className="grid place-items-center p-20">
            <div className="max-w-xl w-full p-10">
                <HeroSection/>
                <SponsorSection/>
                <FeatureSection/>
            </div>
        </div>);
}