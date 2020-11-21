import React, { useState } from 'react';


const initial_input = {
    previous_transaction: "",
    index: "",
    value: "",
    script: "",
}


function Input(props){
    const index = props.index;

    const [ input_state, set_input_state ] = useState(initial_input);
    const [ hide, set_hide ] = useState(false);


    return (
        <div className="input">
            <h3>
                <span style={{cursor: "pointer"}} onClick={ event => set_hide(!hide) }>
                    Input { index + 1 }
                </span>
            </h3>
            {
                !hide && 
                <div>
                    <input type="text" value={ input_state.previous_transaction } placeholder="Previous Transaction ID" onChange={
                        event => {
                            event.persist();
                            set_input_state({ ...input_state, previous_transaction: event.target.value });
                        }
                    } /> <br /><br />

                    <input type="number" value={ input_state.index } placeholder="Index" onChange={
                        event => {
                            event.persist();
                            set_input_state({ ...input_state, index: event.target.value });
                        }
                    } /> <br /><br />

                    <input type="number" value={ input_state.value } placeholder="Value" onChange={
                        event => {
                            event.persist();
                            set_input_state({ ...input_state, value: event.target.value });
                        }
                    } /> <br />

                    <textarea value={ input_state.script } placeholder="Script" onChange={ event => {
                        event.persist();
                        set_input_state({ ...input_state, script: event.target.value });
                    }}> 
                    </textarea>

                    <button>Remove</button>
                </div>
            }
        </div>
    );
}


export default Input;