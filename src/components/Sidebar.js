import React, {useState} from 'react';
import menu from '../menu.png';

function SidebarMenu(payload) {

    let clickHandler = payload.handler
    let status = payload.status

    return (<div className={`sidenav ${status ? 'active' : 'inactive'}`}>
        <button onClick={clickHandler}>Close</button>
        <br/>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>)
}

export function SidebarToggle() {

    const [showSidebar, setShowSidebar] = useState(false);
    const clickHandler = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div>
            <div className="sidebar-menu">
                sidenav<br/>
                <img src={menu} alt={"Menu"} onClick={clickHandler}/>
            </div>
            {showSidebar && <SidebarMenu handler={clickHandler} status={showSidebar}/>}
        </div>
    );
}
