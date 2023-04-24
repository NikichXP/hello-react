const TableHeaderRow = (payload) => {
    return (<thead>
    <tr key="stat-header">
        <th>Metric\Group</th>
        {payload.header.map(h => (<th key={h}>{h}</th>))}
    </tr>
    </thead>)
}

const TableBody = (payload) => {
    let cell = 0
    let rowId = 0
    return (<tbody>{payload.data.map(data =>
        <tr key={rowId++}>
            {data.map(el => <td key={"el-" + cell++} className={el.trend}>{el.value}</td>)}
        </tr>)}
    </tbody>)
}

export function StatusTable(content) {
    let headers = content.headers
    let data = content.data

    return (
        <table className="my-table">
            <TableHeaderRow header={headers}/>
            <TableBody data={data}/>
        </table>
    )
}