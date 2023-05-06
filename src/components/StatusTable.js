const TableHeaderRow = (payload) => {
    return (<thead>
    <tr key="stat-header">
        <th>Metric\Group</th>
        {payload.header.map(h => (<th key={h}>{h}</th>))}
    </tr>
    </thead>)
}

function getTrend(prev, actual) {
    return (actual > prev) ? 'up'
        : (actual < prev) ? 'down'
            : 'stable'
}

const predefinedList = ["recent", "total"]

const TableBody = (payload) => {
    let rowId = 0
    let headers = payload.headers
    console.log(payload.data)

    return (<tbody>
    {Object.entries(payload.data).map((entry) => {
        if (headers.every((a, i) => a === predefinedList[i])) {
            return <PredefinedRow row={rowId++} title={entry[0]} content={entry[1]}/>
        } else {
            return <TableRow row={rowId++} title={entry[0]} content={entry[1]} headers={headers}/>
        }
    })}
    </tbody>)
}

const PredefinedRow = (payload) => {
    let rowId = payload.row
    let key = payload.title
    let content = payload.content
    let trend = getTrend(content['total'], content['recent'])

    return <tr key={'row-' + rowId}>
        <td key={"ch-" + rowId}>{key}</td>
        <td key={"cr-" + rowId} className={trend}>{content['recent']}</td>
        <td key={"ct-" + rowId}>{content['total']}</td>
    </tr>
}

const TableRow = (payload) => {
    let rowId = payload.row
    let cell = 0
    let key = payload.title
    let content = payload.content
    let headers = payload.headers

    return <tr key={'row-' + rowId}>
        <td key={"c-" + rowId + "-" + cell++}>{key}</td>
        {headers
            .map(header => {
                let id = "c-" + rowId + "-" + cell++
                return (<td key={id}>{content[header]}</td>)
            })
        }
    </tr>
}

export function StatusTable(content) {
    let headers = content.headers
    let data = content.data

    if (headers[0] === 'total') {
        let swap = headers[headers.length - 1]
        headers[headers.length - 1] = headers[0]
        headers[0] = swap
    }

    return (
        <table className="my-table">
            <TableHeaderRow header={headers}/>
            <TableBody data={data} headers={headers}/>
        </table>
    )
}