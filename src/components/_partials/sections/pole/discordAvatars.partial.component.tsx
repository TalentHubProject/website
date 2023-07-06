import Image from "next/image";
import { cache } from 'react';

const fetchDiscordGuildMembers = cache(async () => {
    const token = process.env.DISCORD_TOKEN;
    const guildId = process.env.DISCORD_GUILD_ID;

    const res = await fetch(`https://discord.com/api/guilds/${guildId}/members`, {
        headers: {
            Authorization: 'Bot ' + token,
        },
    });

    if (!res.ok) {
        return [];
    }

    return res ? res.json() : [];
});

export default async function DiscordAvatars() {
    const data = await fetchDiscordGuildMembers();

    return (
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
            {
                data?.map((discordAvatar: any) => (
                    <Image
                        src={`https://cdn.discordapp.com/avatars/${discordAvatar.user.id}/${discordAvatar.user.avatar}.png`}
                        width={64} height={64} className="rounded-full" alt={discordAvatar.user.username}
                        key={discordAvatar.user.id}/>
                ))
            }
        </div>);
}
