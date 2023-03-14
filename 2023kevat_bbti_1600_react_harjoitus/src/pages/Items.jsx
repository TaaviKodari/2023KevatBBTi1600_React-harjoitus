import React from "react";
import { Item } from "./Item";
import { items } from "./ItemDatabase";

export const Items=()=>{
    return(
        <div>
            {
                items.map(({title,description,img})=>
                <Item title={title}
                      description={description}
                      img={img}
                />
                )
            }
        </div>
    );
}