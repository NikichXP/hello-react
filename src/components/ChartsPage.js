import {LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import {useEffect, useState} from "react";

async function getChartIds() {
    return fetch('https://route.nikichxp.xyz/charts/list')
        .then(response => response.json())
        .then(arr => arr.map(el => el.id))
}

export function ChartsPage() {

    const [charts, setCharts] = useState(null)
    const [src, setSrc] = useState([1])

    const fetchChartData = () => {
        fetch('https://route.nikichxp.xyz/charts/ROUTE_OK?grouping=10')
            .then(response => response.json())
            .then(json => setSrc(json.chartData))
    }

    if (charts == null) {
        getChartIds()
            .then(setCharts)
            .then(fetchChartData)
    }

    useEffect(() => {
        const interval = setInterval(fetchChartData, 10_000)
        return () => clearInterval(interval)
    }, [])

    let data = src.map((num, i) => {
        return {name: i, data: num}
    })

    return <div>
        <button onClick={() => getChartIds().then(setCharts)}>Update charts list</button><br/>
        <span>{JSON.stringify(charts)}</span><br/>
        <span>{JSON.stringify(src)}</span><br/>
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
            {/*<Line type="monotone" dataKey="mod" stroke="#82ca9d"/>*/}
        </LineChart>
    </div>
}