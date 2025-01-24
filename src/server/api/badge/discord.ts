import {defineBadgeEventHandler, cachedDiscordPresenceCount} from '~/server/utils/badges'
import {formatMetric} from '~/server/utils/formatter'
import {badgen} from 'badgen'

export default defineBadgeEventHandler(async (event) => {
    const guildID: string = useRuntimeConfig(event).guildID

    let online = 0
    if (guildID !== undefined) {
        online = await cachedDiscordPresenceCount(event, guildID).catch(() => -1)
    }

    return badgen({
        label: 'discord', status: `${formatMetric(online)} online`, color: (online < 0) ? 'red' : 'green'
    })
})
