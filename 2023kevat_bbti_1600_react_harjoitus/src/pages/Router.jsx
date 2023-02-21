import {Outlet, Link} from "react-router-dom";
import React from "react";

export const Router = ()=>{
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Buttons">Buttons</Link>
                    </li>
                    <li>
                        <Link to="/Counters">Counters</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
}