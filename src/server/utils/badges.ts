import type {EventHandler, EventHandlerRequest} from 'h3'

export const getBStatsPlayers = cachedFunction(async (pluginID: number): Promise<number> => {
    const response = await apiFetch<number[][]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/players/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/players', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getBStatsServers = cachedFunction(async (pluginID: number): Promise<number> => {
    const response = await apiFetch<number[][]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/servers/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/servers', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getSpigotDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    const plugin = await apiFetch<SpigotPlugin>(`https://api.spigotmc.org/simple/0.2/index.php?action=getResource&id=${pluginID}`)
    return Number.parseInt(plugin.stats.downloads, 10)
}, {name: 'spigot/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getHangarDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    const plugin = await apiFetch<HangarPlugin>(`https://hangar.papermc.io/api/v1/projects/${pluginID}`)
    return plugin.stats.downloads
}, {name: 'hangar/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getModrinthDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    const plugin = await apiFetch<ModrinthProject>(`https://api.modrinth.com/v2/project/${pluginID}`)
    return plugin.downloads
}, {name: 'modrinth/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getGitHubDownloads = cachedFunction(async (repository: string): Promise<number> => {
    const releases = await apiFetch<GitHubRelease[]>(`https://api.github.com/repos/${repository}/releases`)

    let downloads = 0
    for (const release of releases) {
        for (const asset of release.assets) {
            downloads += asset.download_count
        }
    }

    return downloads
}, {name: 'github/downloads', getKey: (repository) => repository, maxAge: 60 * 60, staleMaxAge: -1})

export const getGitHubRelease = cachedFunction(async (repository: string): Promise<string> => {
    const release = await apiFetch<GitHubRelease>(`https://api.github.com/repos/${repository}/releases/latest`)
    return release.name
}, {name: 'github/release', getKey: (repository) => repository, maxAge: 60 * 60, staleMaxAge: -1})

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
