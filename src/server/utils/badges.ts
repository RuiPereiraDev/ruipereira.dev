import type {EventHandler, EventHandlerRequest} from 'h3'

export const defineBadgeEventHandler = <T extends EventHandlerRequest, D>(
    handler: EventHandler<T, D>
): EventHandler<T, D> => defineEventHandler<T>(async event => {
    try {
        setHeader(event, 'content-type', 'image/svg+xml')
        return await handler(event)
    } catch (err) {
        setResponseStatus(event, 500)
        return {err}
    }
})
