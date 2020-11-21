import React from 'react';


function Input(props){
    const index = props.index;
    

    return (
        <div className="input">
            <h3>Input { index + 1 }</h3>
            <input type="text" placeholder="Previous Transaction ID" /> <br /><br />
            <input type="number" placeholder="Index" /> <br /><br />
            <input type="number" placeholder="Value" /> <br />
            <textarea placeholder="Script"> 
            </textarea>
            <button>Remove</button>
        </div>
    );
}


export default Input;