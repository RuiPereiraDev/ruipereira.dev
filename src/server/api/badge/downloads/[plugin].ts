import {
    cachedGitHubDownloads,
    cachedHangarDownloads,
    cachedModrinthDownloads,
    cachedSpigotDownloads,
    defineBadgeEventHandler
} from '~/server/utils/badges'
import { formatMetric } from '~/server/utils/formatter'
import { badgen } from 'badgen'

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
        requests.push(cachedSpigotDownloads(event, pluginConfig.spigotID).then(result => downloads += result))
    }
    if (pluginConfig.hangarID !== undefined) {
        requests.push(cachedHangarDownloads(event, pluginConfig.hangarID).then(result => downloads += result))
    }
    if (pluginConfig.modrinthID !== undefined) {
        requests.push(cachedModrinthDownloads(event, pluginConfig.modrinthID).then(result => downloads += result))
    }
    if (pluginConfig.githubRepo !== undefined) {
        requests.push(cachedGitHubDownloads(event, pluginConfig.githubRepo).then(result => downloads += result))
    }
    await Promise.allSettled(requests)

    return badgen({
        label: 'downloads', status: formatMetric(downloads), color: 'blue'
    })
})
