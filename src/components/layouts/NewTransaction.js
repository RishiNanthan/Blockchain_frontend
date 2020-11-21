import React, { useState } from 'react';

import Input from './Input';
import Output from './Output';


const initial_state = {
    inputs: [<Input  index={0} key={0} />],
    outputs: [<Output index={0} key={0} />],
    description: "",
    timestamp: "",
    public_key: "",
    signature: "",
    transaction_id: "",
}



function NewTransaction(props){

    const changePage = props.change_page;

    let transaction_data = {
        inputs: [
            {
                previous_transction: "",
                value: null,
                index: null,
                script: "",
            }
        ], 
        outputs: [
            {
                value: null,
                script: ""
            }
        ],
        description: "",
        timestamp: "",
        public_key: "",
        signature: "",
        transaction_id: "",
    }


    const setData = (key, value) => {
        if(key === "description")
            transaction_data.description = value;
        else if(key === "timestamp")
            transaction_data.timestamp = value;
        else if(key === "public_key")
            transaction_data.public_key = value;
        else if(key === "signature")
            transaction_data.signature = value;
        else if(key === "transaction_id")
            transaction_data.transaction_id = value;
        else if(key === "input"){
            let index = value.index;
            let inner_key = value.key;
            
            if(inner_key === "previous_transaction")
                transaction_data.inputs[index].previous_transaction = value.value;
            else if(inner_key === "value")
                transaction_data.inputs[index].value = value.value;
            else if(inner_key === "index")
                transaction_data.inputs[index].index = value.value;
            else if(inner_key === "script")
                transaction_data.inputs[index].script = value.value;
        }
        else if(key === "output"){
            let index = value.index;
            let inner_key = value.key;

            if(inner_key === "value")
                transaction_data.outputs[index].value = value.value;
            else if(inner_key === "script")
                transaction_data.outputs[index].script = value.value;
        }
    }


    const [transaction_state, set_transaction_state] = useState(initial_state);
    

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
                            let input_length = transaction_state.inputs.length;
                            let new_inputs = transaction_state.inputs.slice(0);
                            new_inputs.push(<Input index={input_length} key={input_length} />);
                            new_state.inputs = new_inputs;
                            set_transaction_state(new_state);
                            transaction_data.inputs.push({
                                previous_transaction: "",
                                index: null,
                                value: null,
                                script: "",
                            })
                        }}>
                             Inputs +   
                        </span> 
                    </h3>
                    {
                        transaction_state.inputs
                    }
                </div>
                <hr />
                <div>
                    <h3> 
                        <span style={{cursor: "pointer"}}  onClick={ event => {
                            let new_state = { ...transaction_state };
                            let output_length = transaction_state.outputs.length;
                            let new_outputs = transaction_state.outputs.slice(0);
                            new_outputs.push(<Output index={output_length} key={output_length} />)
                            new_state.outputs = new_outputs;
                            set_transaction_state(new_state);
                            transaction_data.outputs.push({
                                value: null,
                                script: "",
                            })
                        } }>
                             Outputs + 
                        </span> 
                    </h3>
                    {
                        transaction_state.outputs
                    }
                </div>
                <hr />
                <textarea placeholder="Description" value={ transaction_state.description } onChange={ event => {
                    event.persist();
                    set_transaction_state({ ...transaction_state, description: event.target.value });
                }}></textarea>

                <input type="datetime" value={ transaction_state.timestamp } placeholder="Time Stamp" onChange={ event => {
                    event.persist();
                    set_transaction_state({ ...transaction_state, timestamp: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.public_key } placeholder="Public Key" onChange={ event => {
                    event.persist();
                    set_transaction_state({ ...transaction_state, public_key: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.signature } placeholder="Signature" onChange={ event => {
                    event.persist();
                    set_transaction_state({ ...transaction_state, signature: event.target.value });
                } } /><br /><br />

                <input type="text" value={ transaction_state.transaction_id } placeholder="Transaction ID" onChange={ event => {
                    event.persist();
                    set_transaction_state({ ...transaction_state, transaction_id: event.target.value });
                }} /><br /><br />
                <hr />

                <button>Transfer</button>
            </div>
        </div>
    );
}

export default NewTransaction;