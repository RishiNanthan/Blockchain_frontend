import React, { useState } from 'react';


function Input(props){
    const index = props.index;
    const set_data = props.set_data;
    const input_state = props.data;
    const remove_input = props.remove_input;

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
                            set_data("input", {
                                index: index,
                                key: "previous_transaction",
                                value: event.target.value,
                            });
                        }
                    } /> <br /><br />

                    <input type="number" value={ input_state.index } placeholder="Index" onChange={
                        event => {
                            event.persist();
                            set_data("input", {
                                index: index,
                                key: "index",
                                value: event.target.value,
                            });
                        }
                    } /> <br /><br />

                    <input type="number" value={ input_state.value } placeholder="Value" onChange={
                        event => {
                            event.persist();
                            set_data("input", {
                                index: index,
                                key: "value",
                                value: event.target.value,
                            });
                        }
                    } /> <br />

                    <textarea value={ input_state.script } placeholder="Script" onChange={ event => {
                        event.persist();
                        set_data("input", {
                            index: index,
                            key: "script",
                            value: event.target.value,
                        });
                    }}> 
                    </textarea>

                    <button onClick={ event => { remove_input(index) }}>Remove</button>
                </div>
            }
        </div>
    );
}


export default Input;