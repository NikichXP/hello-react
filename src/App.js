import './App.css';
import {useState} from 'react';
import {getHeaders, transformStatusData} from "./statusUtils";
import {StatusTable} from "./StatusTable";

function App() {
    const [data, setData] = useState(null);
    const [headers, setHeaders] = useState(null)

    const updateData = async () => {
        const response = await fetch('https://localhost:8080/status')
        const json = await response.json()
        setData(transformStatusData(json))
        setHeaders(getHeaders(json))
    };

    return (
        <div className="App">
            <button onClick={updateData}>Update</button>
            {data && <StatusTable headers={headers} data={data}/>}
        </div>
    );
}

export default App;
