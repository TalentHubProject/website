import Image from "next/image";

export default function ImagePresentationHeroPartial() {
    return (
        <section className={"flex items-center justify-center"}>
            <Image src={"/hero-image.png"} alt={"Talent Hub's discord server overview"} width={1280} height={1024}/>
        </section>
    )
}