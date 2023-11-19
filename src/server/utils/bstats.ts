export const getPluginPlayers = cachedFunction(async (pluginID: number): Promise<number> => {
    const response = await $fetch<[number[]]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/players/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/players', getKey: (pluginID) => pluginID, maxAge: 60 * 10, staleMaxAge: -1})

export const getPluginServers = cachedFunction(async (pluginID: number): Promise<number> => {
    const response = await $fetch<[number[]]>(`https://bstats.org/api/v1/plugins/${pluginID}/charts/servers/data?maxElements=1`)
    return response[0][1]
}, {name: 'bStats/servers', getKey: (pluginID) => pluginID, maxAge: 60 * 10, staleMaxAge: -1})
