import type { EventHandler, EventHandlerRequest, H3Event } from 'h3'

export const cachedBStatsPlayers = defineCachedFunction(async (_: H3Event, pluginID: number): Promise<number> => {
    const response = await apiFetch<number[][]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/players/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/players', getKey: (_: H3Event, pluginID: number) => pluginID.toString(), maxAge: 60 * 30})

export const cachedBStatsServers = defineCachedFunction(async (_: H3Event, pluginID: number): Promise<number> => {
    const response = await apiFetch<number[][]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/servers/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/servers', getKey: (_: H3Event, pluginID: number) => pluginID.toString(), maxAge: 60 * 30})

export const cachedSpigotDownloads = defineCachedFunction(async (_: H3Event, pluginID: number): Promise<number> => {
    const plugin = await apiFetch<SpigotPlugin>(`https://api.spigotmc.org/simple/0.2/index.php?action=getResource&id=${pluginID}`)
    return Number.parseInt(plugin.stats.downloads, 10)
}, {name: 'spigot/downloads', getKey: (_: H3Event, pluginID: number) => pluginID.toString(), maxAge: 60 * 30})

export const cachedHangarDownloads = defineCachedFunction(async (_: H3Event, pluginID: number): Promise<number> => {
    const plugin = await apiFetch<HangarPlugin>(`https://hangar.papermc.io/api/v1/projects/${pluginID}`)
    return plugin.stats.downloads
}, {name: 'hangar/downloads', getKey: (_: H3Event, pluginID: number) => pluginID.toString(), maxAge: 60 * 30})

export const cachedModrinthDownloads = defineCachedFunction(async (_: H3Event, pluginID: number): Promise<number> => {
    const plugin = await apiFetch<ModrinthProject>(`https://api.modrinth.com/v2/project/${pluginID}`)
    return plugin.downloads
}, {name: 'modrinth/downloads', getKey: (_: H3Event, pluginID: number) => pluginID.toString(), maxAge: 60 * 30})

export const cachedGitHubDownloads = defineCachedFunction(async (_: H3Event, repository: string): Promise<number> => {
    const releases = await apiFetch<GitHubRelease[]>(`https://api.github.com/repos/${repository}/releases`)

    let downloads = 0
    for (const release of releases) {
        for (const asset of release.assets) {
            downloads += asset.download_count
        }
    }

    return downloads
}, {name: 'github/downloads', getKey: (_: H3Event, repository: string) => repository, maxAge: 60 * 30})

export const cachedGitHubRelease = defineCachedFunction(async (_: H3Event, repository: string): Promise<string> => {
    const release = await apiFetch<GitHubRelease>(`https://api.github.com/repos/${repository}/releases/latest`)
    return release.name
}, {name: 'github/release', getKey: (_: H3Event, repository: string) => repository, maxAge: 60 * 30})

export const cachedDiscordCount = defineCachedFunction(async (_: H3Event, guildID: string) => {
    const data = await apiFetch<DiscordGuild>(`https://discord.com/api/v10/guilds/${guildID}/widget.json`)
    return data.presence_count
}, {name: 'discord/count', getKey: (_: H3Event, guildID: string) => guildID, maxAge: 60 * 10})

export const defineBadgeEventHandler = <T extends EventHandlerRequest, D>(
    handler: EventHandler<T, D>
): EventHandler<T, D> => defineEventHandler<T>(async event => {
    try {
        const response = await handler(event)
        setHeader(event, 'content-type', 'image/svg+xml')
        return response
    } catch (err) {
        setResponseStatus(event, 500)
        // @ts-ignore
        return {'error': err.message}
    }
})
