import {KVNamespace} from '@cloudflare/workers-types'

export async function getPluginPlayers(pluginID: number, cacheKV: KVNamespace | undefined): Promise<number> {
    let players = 0

    const cachedPlayers = await cacheKV?.get(`players:${pluginID}`, {cacheTtl: 600})
    if (cachedPlayers === undefined || cachedPlayers === null) {
        const response = await fetch(`https://bstats.org/api/v1/plugins/${pluginID}/charts/players/data?maxElements=1`)
        if (response.ok) {
            const json = await response.json()
            players = json[0][1]

            cacheKV?.put(`players:${pluginID}`, players.toString(), {expirationTtl: 1800})
        }
    } else players = parseInt(cachedPlayers, 10)

    return players
}

export async function getPluginServers(pluginID: number, cacheKV: KVNamespace | undefined): Promise<number> {
    let servers = 0

    const cachedServers = await cacheKV?.get(`servers:${pluginID}`, {cacheTtl: 600})
    if (cachedServers === undefined || cachedServers === null) {
        const response = await fetch(`https://bstats.org/api/v1/plugins/${pluginID}/charts/servers/data?maxElements=1`)
        if (response.ok) {
            const json = await response.json()
            servers = json[0][1]

            cacheKV?.put(`servers:${pluginID}`, servers.toString(), {expirationTtl: 1800})
        }
    } else servers = parseInt(cachedServers, 10)

    return servers
}
