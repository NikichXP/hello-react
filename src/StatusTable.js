import {transformStatusData} from "./statusUtils";

const TableHeaderRow = (payload) => {
    return (<thead>
    <tr>
        <th>Metric\Group</th>
        {payload.header.map(h => (<th>{h}</th>))}
    </tr>
    </thead>)
}

const TableRow = (payload) => {
    return payload.data.map((data) =>
        (<tr>
            {data.map(el => <td>{el}</td>)}
        </tr>)
    )
}

export function StatusTable(content) {
    let headers = content.headers
    let data = content.data

    return (
        <table class="striped">
            <TableHeaderRow header={headers}/>
            <TableRow data={data}/>
        </table>
    )
}