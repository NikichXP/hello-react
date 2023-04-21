import {StatusTable} from "./StatusTable";
import {useState} from "react";
import {getHeaders, transformStatusData} from "../statusUtils";

export function StatusPage() {

    const [data, setData] = useState(null);
    const [headers, setHeaders] = useState(null)

    const updateData = async () => {
        const response = await fetch('https://route.nikichxp.xyz/status')
        const json = await response.json()
        setData(transformStatusData(json))
        setHeaders(getHeaders(json))
    };

    return <div>
        <h1>Welcome</h1>
        <button onClick={updateData}>Update</button>
        {data && <StatusTable headers={headers} data={data}/>}
    </div>
}