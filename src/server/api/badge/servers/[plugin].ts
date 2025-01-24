import { cachedBStatsServers, defineBadgeEventHandler } from '~/server/utils/badges'
import { formatMetric } from '~/server/utils/formatter'
import { badgen } from 'badgen'

export default defineBadgeEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    const plugin = getRouterParam(event, 'plugin')
    if (plugin === undefined || !(plugin in plugins)) {
        setResponseStatus(event, 400)
        return badgen({
            label: 'servers', status: 'invalid', color: 'red'
        })
    }

    let servers = 0

    const requests: Promise<number>[] = []
    for (const bStatsID of plugins[plugin].bStats) {
        requests.push(cachedBStatsServers(event, bStatsID).then(result => servers += result))
    }
    await Promise.allSettled(requests)

    return badgen({
        label: 'servers', status: formatMetric(servers), color: 'blue'
    })
})
