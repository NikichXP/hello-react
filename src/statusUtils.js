let getKeyFrom = (json) => {
    return Object.entries(json).map(e => e[0])
}

export function transformStatusData(data) {
    let events = data.metrics.intensity
    let keys = getKeyFrom(events.total)
    let groups = getKeyFrom(events)

    let result = {}

    keys.forEach(key => {
        let res = {}
        groups.forEach(group => {
            res[group] = events[group][key]
        })
        result[key] = res
    })

    return result
}

export function getHeaders(data) {
    return getKeyFrom(data.metrics.intensity)
}
