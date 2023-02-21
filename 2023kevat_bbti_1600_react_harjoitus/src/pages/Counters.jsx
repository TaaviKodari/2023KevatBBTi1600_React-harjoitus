import React from "react";
import{useState,useEffect} from "react";

export const Counters = () =>{
    const[count, setCount] =useState(0);
    useEffect(()=>{
      setTimeout(function(){
        setCount(count+1)
      },1000); 
    },);

    return(
        <div>
            <h1>I've rendered {count} time!</h1>
        </div>
    );
}