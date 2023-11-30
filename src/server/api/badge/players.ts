import {shieldResponse} from '~/server/utils/shields'
import {getPluginPlayers} from '~/server/utils/bstats'
import {formatMetric} from '~/server/utils/formatter'

export default defineEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    let players = 0

    const requests: Promise<number>[] = []
    for (const plugin in plugins) {
        for (const bStatsID of plugins[plugin].bStats) {
            requests.push(getPluginPlayers(bStatsID).then(result => players += result))
        }
    }
    await Promise.allSettled(requests)

    return shieldResponse('players', formatMetric(players), 'blue')
})
