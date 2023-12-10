import {
    defineBadgeEventHandler,
    getGitHubDownloads,
    getHangarDownloads,
    getModrinthDownloads,
    getSpigotDownloads
} from '~/server/utils/badges'
import {formatMetric} from '~/server/utils/formatter'
import {badgen} from 'badgen'

export default defineBadgeEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    const plugin = getRouterParam(event, 'plugin')
    if (plugin === undefined || !(plugin in plugins)) {
        setResponseStatus(event, 400)
        return badgen({
            label: 'downloads', status: 'invalid', color: 'red'
        })
    }

    let downloads = 0

    const requests: Promise<number>[] = []

    const pluginConfig = plugins[plugin]
    if (pluginConfig.spigotID !== undefined) {
        requests.push(getSpigotDownloads(pluginConfig.spigotID).then(result => downloads += result))
    }
    if (pluginConfig.hangarID !== undefined) {
        requests.push(getHangarDownloads(pluginConfig.hangarID).then(result => downloads += result))
    }
    if (pluginConfig.modrinthID !== undefined) {
        requests.push(getModrinthDownloads(pluginConfig.modrinthID).then(result => downloads += result))
    }
    if (pluginConfig.githubRepo !== undefined) {
        requests.push(getGitHubDownloads(pluginConfig.githubRepo).then(result => downloads += result))
    }
    await Promise.allSettled(requests)

    return badgen({
        label: 'downloads', status: formatMetric(downloads), color: 'blue'
    })
})
