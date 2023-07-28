const metricPrefix = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
const metricPower = metricPrefix.map((_, i) => Math.pow(1000, i + 1))

export function formatMetric(n: number): string {
    for (let i = metricPrefix.length - 1; i >= 0; i--) {
        const limit = metricPower[i]
        const absN = Math.abs(n)
        if (absN >= limit) {
            const scaledN = absN / limit
            if (scaledN < 10) {
                // For "small" numbers, display one decimal digit unless it is 0.
                const oneDecimalN = scaledN.toFixed(1)
                if (oneDecimalN.charAt(oneDecimalN.length - 1) !== '0') {
                    const res = `${oneDecimalN}${metricPrefix[i]}`
                    return n > 0 ? res : `-${res}`
                }
            }
            const roundedN = Math.round(scaledN)
            if (roundedN < 1000) {
                const res = `${roundedN}${metricPrefix[i]}`
                return n > 0 ? res : `-${res}`
            } else {
                const res = `1${metricPrefix[i + 1]}`
                return n > 0 ? res : `-${res}`
            }
        }
    }
    return `${n}`
}
