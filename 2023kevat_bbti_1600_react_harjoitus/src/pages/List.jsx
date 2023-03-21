import React from "react";
import { useState } from "react";

export const List =()=>{
    const [content, setContent] = useState([]);
    const [inputValue,setInputValue] = useState('');
    return(
        <div>
            <div>
                <form onSubmit= {(event)=>{
                    event.preventDefault()
                    const temp =  [inputValue, ...content];
                    setContent(temp);
                    setInputValue('');
                }}>
                    <input type="text"
                    placeholder="type here..."
                    value={inputValue}
                    onChange={e=>setInputValue(e.target.value)}
                    required/>
                    
                    <input type="submit" value="Submit"/>

                    {
                        content.map((item)=>(
                            <ul>
                                <li>
                                    <h2>{item}</h2>
                                </li>
                            </ul>
                        ))
                    }

                </form>
            </div>
        </div>
    );
}