import {LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const src = [1, 2, 3, 4, 5, 6, 4, 3, 2, 6, 1, 7, 1, 4, 2, 1]

export function ChartsPage() {

    let data = src.map((num, i) => {
        return {name: i, data: num, mod: 1 + (num % 5)}
    })

    return <div style={ {width:"50%", height:"50%" }}>
        <LineChart
            width={1200}
            height={700}
            data={data}
        >
            <CartesianGrid/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="data" stroke="#8884d8"/>
            <Line type="monotone" dataKey="mod" stroke="#82ca9d"/>
        </LineChart>
    </div>
}