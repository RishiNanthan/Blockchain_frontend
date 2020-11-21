import React from 'react';


function Output(props){
    const index = props.index;

    return (
        <div className="output">
            <h3>Output { index + 1} </h3>
            <input type="text" placeholder="Value" />
            <textarea placeholder="Script">
            </textarea>
            <button>Remove</button>
        </div>
    );
}


export default Output;