import './styles/App.css';
import {StatusPage} from './components/StatusPage'
import {Sidebar} from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChartsPage} from "./components/ChartsPage";

function App() {

    function FooBar() {
        return <div><h1>FOO BAR</h1></div>
    }

    return (
        <div className="container">
            <BrowserRouter>
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route index element={<StatusPage/>}/>
                        <Route path="foo" element={<FooBar/>}/>
                        <Route path="charts" element={<ChartsPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
