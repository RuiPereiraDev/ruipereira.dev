import {defineBadgeEventHandler} from '~/server/utils/badges'
import {formatMetric} from '~/server/utils/formatter'
import {badgen} from 'badgen'
import {getPluginPlayers} from '~/server/utils/bstats'

export default defineBadgeEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    let players = 0

    const requests: Promise<number>[] = []
    for (const plugin in plugins) {
        for (const bStatsID of plugins[plugin].bStats) {
            requests.push(getPluginPlayers(bStatsID).then(result => players += result))
        }
    }
    await Promise.allSettled(requests)

    return badgen({
        label: 'players', status: formatMetric(players), color: 'blue'
    })
})
