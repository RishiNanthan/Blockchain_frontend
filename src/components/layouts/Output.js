import React, { useState } from 'react';

const initial_output = {
    value: "",
    script: "",
}


function Output(props){
    const index = props.index;

    const [ output_state, set_output_state ] = useState(initial_output);
    const [ hide, set_hide ] = useState(false);

    return (
        <div className="output">
            <h3>
                <span style={{cursor: "pointer"}} onClick={ event => set_hide(!hide) }>
                    Output { index + 1}
                </span> 
            </h3>
            {
                !hide &&
                <div>
                    <input type="text" value={ output_state.value } placeholder="Value" onChange={ event => {
                        event.persist();
                        set_output_state({ ...output_state, value: event.target.value });
                    }} />

                    <textarea value={ output_state.script } placeholder="Script" onChange={ event => {
                        event.persist();
                        set_output_state({ ...output_state, script: event.target.value });
                    }}>
                    </textarea>
                    <button>Remove</button>
                </div>
            }
        </div>
    );
}


export default Output;