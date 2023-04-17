let getKeyFrom = (json) => {
    return Object.entries(json).map(e => e[0])
}

export function transformStatusData(data) {
    let events = data.metrics.events
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
    return getKeyFrom(data.metrics.events)
}

// let data = {
//     "routes": {
//         "activeQueue": 1226,
//         "cacheSize": 1000
//     },
//     "metrics": {
//         "events": {
//             "recent": {
//                 "route-fail": 0,
//                 "coroutine-check-in": 17,
//                 "coroutine-check-fail": 9,
//                 "coroutine-check-ok": 8,
//                 "route-ok": 6,
//                 "coroutine-check-timeout": 2
//             },
//             "total": {
//                 "route-fail": 73,
//                 "coroutine-check-in": 1221046,
//                 "coroutine-check-fail": 666172,
//                 "coroutine-check-ok": 532372,
//                 "route-ok": 531115,
//                 "coroutine-check-timeout": 22222
//             },
//             "intensity": {
//                 "route-fail": 0.0,
//                 "coroutine-check-in": 10.88,
//                 "coroutine-check-fail": 5.95,
//                 "coroutine-check-ok": 4.88,
//                 "route-ok": 4.72,
//                 "coroutine-check-timeout": 0.2
//             }
//         },
//         "numeric": {
//             "processing links": 1000
//         },
//         "formatted": {
//             "queued-link-check": 750.0
//         },
//         "criticalSections": {
//             "semaphore": 250
//         }
//     }
// }
// console.log(getHeaders(data))