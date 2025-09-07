import { cachedGitHubRelease, defineBadgeEventHandler } from '~~/server/utils/badges'
import { badgen } from 'badgen'

export default defineBadgeEventHandler(async (event) => {
    const plugins: Record<string, any> = useRuntimeConfig(event).plugins

    const plugin = getRouterParam(event, 'plugin')
    if (plugin === undefined || !(plugin in plugins)) {
        setResponseStatus(event, 400)
        return badgen({
            label: 'release', status: 'invalid', color: 'red'
        })
    }

    let release = 'unknown'
    if (plugins[plugin].githubRepo) {
        release = await cachedGitHubRelease(event, plugins[plugin].githubRepo).catch(() => 'error')
    }

    return badgen({
        label: 'release', status: release, color: (release == 'error') ? 'red' : 'blue'
    })
})
