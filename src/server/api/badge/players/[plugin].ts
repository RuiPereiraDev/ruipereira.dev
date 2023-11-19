import {shieldResponse} from '~/server/utils/shields'
import {getPluginPlayers} from '~/server/utils/bstats'
import {formatMetric} from '~/server/utils/formatter'

const plugins: { [p: string]: number[] } = useRuntimeConfig().plugins

export default defineEventHandler(async ({context}) => {
    const plugin = context.params?.plugin
    if (plugin === undefined || !(plugin in plugins)) {
        return shieldResponse('players', 'invalid', 'red', true)
    }

    let players = 0

    const requests: Promise<number>[] = []
    for (const pluginID of plugins[plugin]) {
        requests.push(getPluginPlayers(pluginID).then(result => players += result))
    }
    await Promise.allSettled(requests)

    return shieldResponse('players', formatMetric(players), 'blue')
})
