import {Suspense, use} from "react";
import Image from "next/image";

const fetchDiscordGuildMembers = async () => {
    const token = process.env.DISCORD_TOKEN;
    const guildId = process.env.DISCORD_GUILD_ID;

    const res = await fetch(`https://discord.com/api/guilds/${guildId}/members`, {
        headers: {
            Authorization: 'Bot ' + token,
        },
    });

    return res ? res.json() : [];
}
export default function DiscordAvatars() {

    const discordAvatarsData = use(fetchDiscordGuildMembers());

    console.log(discordAvatarsData);

    return (<div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
            <Suspense fallback={<div>Loading...</div>}>
                {discordAvatarsData?.map((discordAvatar: any) => (
                    <Image src={`https://cdn.discordapp.com/avatars/${discordAvatar.user.id}/${discordAvatar.user.avatar}.png`} width={64} height={64} className="rounded-full"  alt={discordAvatar.user.username} key={discordAvatar.user.id}/>
                ))}
            </Suspense>
        </div>);
}