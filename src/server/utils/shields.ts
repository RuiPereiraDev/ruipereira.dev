export const shieldsSchemaVersion = 1

export function shieldResponse(label: string, message: string, color: string, isError: boolean = false) {
    const response: { [index: string]: any } = {
        schemaVersion: shieldsSchemaVersion,
        label: label,
        message: message,
        color: color
    }
    if (isError) response.isError = isError
    return response
}
