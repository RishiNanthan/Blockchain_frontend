import React, { useState } from 'react';

import Input from './Input';
import Output from './Output';


function NewTransaction(props){

    const changePage = props.change_page;


    const initial_state = {
        inputs: [
            {
                previous_transaction: "",
                index: "",
                value: "",
                script: ""
            },
        ],
        outputs: [
            {
                value: "",
                script: "",
            },
        ],
        description: "",
        timestamp: "",
        public_key: "",
        signature: "",
        transaction_id: "",
    }

    const [transaction_state, set_transaction_state] = useState(initial_state);
    const [ error_msg, set_error_msg ] = useState("");


    const setData = (key, value) => {
        let new_transaction_state = { ...transaction_state };

        if(key === "description")
            new_transaction_state.description = value;
        else if(key === "timestamp")
            new_transaction_state.timestamp = value;
        else if(key === "public_key")
            new_transaction_state.public_key = value;
        else if(key === "signature")
            new_transaction_state.signature = value;
        else if(key === "transaction_id")
            new_transaction_state.transaction_id = value;
        else if(key === "input"){
            let index = value.index;
            let inner_key = value.key;
            
            if(inner_key === "previous_transaction")
                new_transaction_state.inputs[index].previous_transaction = value.value;
            else if(inner_key === "value")
                new_transaction_state.inputs[index].value = value.value;
            else if(inner_key === "index")
                new_transaction_state.inputs[index].index = value.value;
            else if(inner_key === "script")
                new_transaction_state.inputs[index].script = value.value;
        }
        else if(key === "output"){
            let index = value.index;
            let inner_key = value.key;

            if(inner_key === "value")
                new_transaction_state.outputs[index].value = value.value;
            else if(inner_key === "script")
                new_transaction_state.outputs[index].script = value.value;
        }
        console.log(new_transaction_state);
        set_transaction_state(new_transaction_state);

    }

    const removeInput = (index) => {
        let new_state = { ...transaction_state };
        let inputs = [];

        for(let i=0; i<index; i++)
            inputs.push(new_state.inputs[i]);

        for(let i=index+1; i<new_state.inputs.length; i++){
            let input = { ...new_state.inputs[i] };
            inputs.push(input);
        }
        new_state.inputs = inputs;
        console.log(new_state);
        set_transaction_state(new_state);
    }

    const removeOutput = (index) => {
        let new_state = { ...transaction_state };
        let outputs = [];

        for(let i=0; i<index; i++)
            outputs.push(new_state.outputs[i]);

        for(let i=index+1; i<new_state.outputs.length; i++){
            let output = { ...new_state.outputs[i] };
            outputs.push(output);
        }
        new_state.outputs = outputs;
        console.log(new_state);
        set_transaction_state(new_state);
    }

    const checkValidity = () => {
        if(transaction_state.public_key !== "" && transaction_state.signature !== "" && 
            transaction_state.timestamp !== "" && transaction_state.transaction_id !== "")
        {
            set_error_msg("");
            return true;
        }
            
        set_error_msg("Public Key, Signature, Timestamp, Transaction ID cannot be empty.")
        return false;
    }

    const clearAll = () => {
        set_transaction_state(initial_state);
    }

    const Transfer = () => {
        if(checkValidity()){
            fetch("/create_transaction", {
                method: "POST",
                body: JSON.stringify({ ...transaction_state }),
            })
            .then( res => {
                return res.json();
            })
            .then( data => {
                console.log(data);
            })
            .catch( error => {
                console.log(error);
                set_error_msg("Server unavailable");
            });
        }
    }

    return (
        <div className="transaction container">
            <div className="new-transaction">
                <h4>
                    New Transaction &nbsp; &nbsp; 
                    <span className="btn" onClick={ event => changePage(2) }>History</span> &nbsp; &nbsp;
                    <span className="btn" onClick={ event => changePage(0) }>Transaction</span>
                </h4>
                <hr />
                <div className="inputs">
                    <h3>
                        <span style={{cursor: "pointer"}} onClick={ event => {

                            let new_state = { ...transaction_state };
                            new_state.inputs.push(
                                {
                                    previous_transaction: "",
                                    value: "",
                                    index: "",
                                    script: "",
                                }
                            );
                            set_transaction_state(new_state);
                            
                        }}>
                             Inputs +   
                        </span> 
                    </h3>
                    {
                        transaction_state.inputs.map( (input, i) => {
                            return <Input index={i} key={input+i} set_data={setData} data={input} remove_input={removeInput} />
                        })
                    }
                </div>
                <hr />
                <div>
                    <h3> 
                        <span style={{cursor: "pointer"}}  onClick={ event => {
                            let new_state = { ...transaction_state }
                            new_state.outputs.push({
                                value: "",
                                script: "",
                            });

                            set_transaction_state(new_state);

                        } }>
                             Outputs + 
                        </span> 
                    </h3>
                    {
                        transaction_state.outputs.map( (output, i) => {
                            return <Output index={i} key={output+i} data={output} set_data={setData} remove_output={removeOutput} />
                        })
                    }
                </div>
                <hr />
                <textarea placeholder="Description" value={ transaction_state.description } onChange={ event => {
                    event.persist();
                    setData("description", event.target.value);
                    set_transaction_state({ ...transaction_state, description: event.target.value });
                }}></textarea>

                <input type="datetime" value={ transaction_state.timestamp } placeholder="Time Stamp" onChange={ event => {
                    event.persist();
                    setData("timestamp", event.target.value);
                    set_transaction_state({ ...transaction_state, timestamp: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.public_key } placeholder="Public Key" onChange={ event => {
                    event.persist();
                    setData("public_key", event.target.value);
                    set_transaction_state({ ...transaction_state, public_key: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.signature } placeholder="Signature" onChange={ event => {
                    event.persist();
                    setData("signature", event.target.value);
                    set_transaction_state({ ...transaction_state, signature: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.transaction_id } placeholder="Transaction ID" onChange={ event => {
                    event.persist();
                    setData("transaction_id", event.target.value);
                    set_transaction_state({ ...transaction_state, transaction_id: event.target.value });
                }} /><br /><br />
                <hr />

                {
                    error_msg !== "" &&
                    <p style={{color: "red"}}>&nbsp; &nbsp; { error_msg } </p> 
                }
                
                <button onClick={ event => Transfer() }>Transfer</button>
                <button onClick={ event => clearAll() }>Clear All</button>
            </div>
        </div>
    );
}

export default NewTransaction;