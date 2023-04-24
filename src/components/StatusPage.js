import {StatusTable} from "./StatusTable";
import {useEffect, useState} from "react";
import {getHeaders, transformStatusData} from "../statusUtils";

export function StatusPage() {

    const [data, setData] = useState(null)
    const [headers, setHeaders] = useState(null)

    const updateData = () => {
        fetch('https://route.nikichxp.xyz/status')
            .then(response => response.json())
            .then(json => {
                let rawData = transformStatusData(json)
                if (headers == null) {
                    setHeaders(getHeaders(json))
                }
                if (data == null) {
                    setData(rawData.map(arr => arr.map(element => {
                        return {value: element, trend: 'stable'}
                    })))
                } else {
                    let result = []
                    for (let i = 0; i < rawData.length; i++) {
                        let array = []
                        array.push({value: rawData[i][0], trend: 'stable'})
                        for (let j = 1; j < rawData[i].length; j++) {
                            let newVal = rawData[i][j]
                            array.push({
                                trend: (newVal > data[i][j].value) ? 'up' :
                                    (newVal < data[i][j].value) ? 'down' : 'stable',
                                value: newVal
                            })
                        }
                        result.push(array)
                    }
                    setData(result)
                }
            })
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateData()
        }, 1000);

        return () => clearInterval(interval);
    }, [updateData, data, setData]);


    return <div>
        <h1>Welcome</h1>
        <button onClick={updateData}>Update</button>
        {data && <StatusTable headers={headers} data={data}/>}
    </div>
}