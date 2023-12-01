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
