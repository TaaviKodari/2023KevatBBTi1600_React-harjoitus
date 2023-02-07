import React from "react";
import { useState } from "react";

export const Buttons = () =>{
    const[count,setCount] = useState(0);

    function countClicks(){
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={countClicks}>{count}</button>
        </div>
    );
}