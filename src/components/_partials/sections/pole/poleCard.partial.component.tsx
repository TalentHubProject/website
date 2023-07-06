export interface IPoleCardPartialProps {
    readonly badgeLabel: string;
    readonly badgeColor: string;
    readonly title: string;
    readonly illustrationLink: string;
    readonly backgroundColor: string;
}
export default function PoleCardPartial(poleCardPartialProps: IPoleCardPartialProps) {
    return (
        <div className={`h-[550px] w-[550px] scroll-snap-start flex justify-center items-center text-white text-5xl ${poleCardPartialProps.backgroundColor} rounded-xl hover:brightness-125 transition-all duration-200 hover:cursor-pointer`}>
            {poleCardPartialProps.title}
        </div>
    );
}