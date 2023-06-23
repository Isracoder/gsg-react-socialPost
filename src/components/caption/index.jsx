import "./styles.css";
import React from "react";

const Caption =(props)=>{
    const {handleClick} = props ;
    return (
        <div className="captionInput">
            
            <input type="text" placeholder="caption"></input>
            <button type="Submit" onClick={handleClick}>Create Post</button>
      </div>
    )
}
export default Caption ;