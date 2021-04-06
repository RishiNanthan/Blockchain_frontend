import React, { useState } from 'react';


function Output(props){
    const index = props.index;
    const set_data = props.set_data;
    const output_state = props.data;
    const remove_output = props.remove_output;

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
                        set_data("output", {
                            index: index,
                            key: "value",
                            value: event.target.value,
                        });
                    }} />

                    <textarea value={ output_state.script } placeholder="Script" onChange={ event => {
                        event.persist();
                        set_data("output", {
                            index: index,
                            key: "script",
                            value: event.target.value,
                        });
                    }}>
                    </textarea>
                    <button onClick={ event => remove_output(index) }>Remove</button>
                </div>
            }
        </div>
    );
}


export default Output;