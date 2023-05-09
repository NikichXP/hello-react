import {StatusTable} from "./StatusTable";
import {useEffect, useState} from "react";
import {getHeaders, transformStatusData} from "../statusUtils";

export function StatusPage() {

    const [data, setData] = useState(null)
    const [headers, setHeaders] = useState(null)
    const [activeRequest, setActiveRequest] = useState(false)

    function processTableData(json) {
        let rawData = transformStatusData(json)
        if (headers == null) {
            setHeaders(getHeaders(json))
        }
        setData(rawData)
        // console.log(getHeaders(json))
        // console.log(rawData)
        // if (data == null) {
        //     let keys = Object.keys(rawData)
        //     console.log(keys)
        //     keys.forEach(key => {
        //
        //     })
        //     setData(rawData.map(arr => arr.map(element => {
        //         return {value: element, trend: 'stable'}
        //     })))
        // } else {
        //     let result = []
        //     rawData.forEach((rawArr, i) => {
        //         let array = []
        //         // element 0 - name
        //         // element 1 - total
        //         // element 2 - recent
        //         array.push({value: rawArr[0], trend: 'stable'})
        //
        //         rawArr.slice(1).forEach((newVal, j) => {
        //             array.push({
        //                 trend: getTrend(data[i][j].value, newVal),
        //                 value: newVal
        //             })
        //         })
        //         result.push(array)
        //     })
        //     setData(result)
        // }
    }

    const updateData = () => {
        if (activeRequest) return
        setActiveRequest(true)
        fetch('https://route.nikichxp.xyz/status')
            .then(response => response.json())
            .then(processTableData)
            .finally(() => setActiveRequest(false))
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateData()
        }, 1000);

        return () => clearInterval(interval);
    }, [updateData, data, setData]);


    return <div>
        <h1>Welcome</h1><br/>
        <button onClick={updateData}>Update</button>
        {data && <StatusTable headers={headers} data={data}/>}
    </div>
}