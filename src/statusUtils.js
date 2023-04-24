let getKeyFrom = (json) => {
    return Object.entries(json).map(e => e[0])
}

export function transformStatusData(data) {
    let events = data.metrics.intensity
    let keys = getKeyFrom(events.total)
    let groups = getKeyFrom(events)

    let tableData = []

    keys.forEach(key => {
        let res = []
        res[0] = key
        groups.map(group => events[group][key]).forEach(entry => res.push(entry))
        tableData.push(res)
    })

    return tableData
}

export function getHeaders(data) {
    return getKeyFrom(data.metrics.intensity)
}
