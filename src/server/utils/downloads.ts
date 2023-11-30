export const getSpigotDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    console.log('getSpigotDownloads')
    const plugin = await $fetch<SpigotPlugin>(`https://api.spigotmc.org/simple/0.2/index.php?action=getResource&id=${pluginID}`, {
        headers: {
            'User-Agent': 'ruipereira.dev'
        }
    })
    console.log(plugin)
    return Number.parseInt(plugin.stats.downloads, 10)
}, {name: 'spigot/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getHangarDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    console.log('getHangarDownloads')
    const plugin = await $fetch<HangarPlugin>(`https://hangar.papermc.io/api/v1/projects/${pluginID}`, {
        headers: {
            'User-Agent': 'ruipereira.dev'
        }
    })
    console.log(plugin)
    return plugin.stats.downloads
}, {name: 'hangar/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getModrinthDownloads = cachedFunction(async (pluginID: number): Promise<number> => {
    console.log('getModrinthDownloads')
    const plugin = await $fetch<ModrinthProject>(`https://api.modrinth.com/v2/project/${pluginID}`, {
        headers: {
            'User-Agent': 'ruipereira.dev'
        }
    })
    console.log(plugin)
    return plugin.downloads
}, {name: 'modrinth/downloads', getKey: (pluginID) => pluginID, maxAge: 60 * 60, staleMaxAge: -1})

export const getGitHubDownloads = cachedFunction(async (repository: string): Promise<number> => {
    console.log('getGitHubDownloads')
    const releases = await $fetch<GitHubRelease[]>(`https://api.github.com/repos/${repository}/releases`, {
        headers: {
            'User-Agent': 'ruipereira.dev'
        }
    })
    console.log(releases)

    let downloads = 0
    for (const release of releases) {
        for (const asset of release.assets) {
            downloads += asset.download_count
        }
    }

    return downloads
}, {name: 'github/downloads', getKey: (repository) => repository, maxAge: 60 * 60, staleMaxAge: -1})
