import HeroSection from "@/components/_partials/sections/heroSection";
import SponsorSection from "@/components/_partials/sections/sponsorSection";
import FeatureSection from "@/components/_partials/sections/featureSection";

export default function Home() {
    return (<>
        <div className="flex justify-center items-center flex-col h-full mt-20">
            <HeroSection/>
            <SponsorSection />
            <FeatureSection />
        </div>
    </>)
}
