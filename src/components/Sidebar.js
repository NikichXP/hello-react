import React, {useEffect, useState} from 'react';
import menu from '../menu.png';
import {Link, Outlet} from "react-router-dom";

function SidebarMenu(payload) {

    let display = payload.display

    return (<div className='sidebar-content' style={{display: display}}>
        <button>Close</button>
        <br/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/foo">Foo</Link></li>
        </ul>
    </div>)
}

export function Sidebar() {

    const [hover, setHover] = useState(false)
    const [display, setDisplay] = useState('none')
    const className = 'sidebar-container'

    useEffect(() => {
        let timer

        if (!hover) {
            timer = setTimeout(() => {
                setDisplay('none')
            }, 700)
        }

        return () => clearTimeout(timer)
    }, [!hover])

    function handleTransition(e) {
        console.log(e)
        if (e.target.className === className) {
            if (hover) {
                setDisplay('block')
            } else {
                setDisplay('none')
            }
        }
    }

    function onMouseEnter() {
        setHover(true)
    }

    function onMouseExit() {
        setHover(false)
    }

    return (
        <div onTransitionEnd={handleTransition} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}
             className={className}>
                sidenav<br/>
                <img src={menu} alt={"Menu"}/>
            <SidebarMenu display={display}/>
        </div>
    );
}
