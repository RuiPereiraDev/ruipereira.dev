import {shieldResponse} from '~/server/utils/shields'
import {formatMetric} from '~/server/utils/formatter'
import {
    getGitHubDownloads,
    getHangarDownloads,
    getModrinthDownloads,
    getSpigotDownloads
} from '~/server/utils/downloads'

export default defineEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    const plugin = getRouterParam(event, 'plugin')
    if (plugin === undefined || !(plugin in plugins)) {
        return shieldResponse('players', 'invalid', 'red', true)
    }

    let downloads = 0

    const requests: Promise<number | void>[] = []

    const pluginConfig = plugins[plugin]
    if (pluginConfig.spigotID !== undefined) {
        requests.push(getSpigotDownloads(pluginConfig.spigotID).then(result => downloads += result).catch(err => console.log(err)))
    }
    if (pluginConfig.hangarID !== undefined) {
        requests.push(getHangarDownloads(pluginConfig.hangarID).then(result => downloads += result).catch(err => console.log(err)))
    }
    if (pluginConfig.modrinthID !== undefined) {
        requests.push(getModrinthDownloads(pluginConfig.modrinthID).then(result => downloads += result).catch(err => console.log(err)))
    }
    if (pluginConfig.githubRepo !== undefined) {
        requests.push(getGitHubDownloads(pluginConfig.githubRepo).then(result => downloads += result).catch(err => console.log(err)))
    }
    await Promise.allSettled(requests)

    return shieldResponse('downloads', formatMetric(downloads), 'blue')
})
