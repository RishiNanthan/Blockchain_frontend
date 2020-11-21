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

    let initial_data = {
        inputs: [], 
        outputs: [],
        description: "",
        timestamp: "",
        public_key: "",
        signature: "",
        transaction_id: "",
    }

    const setData = () => {

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
                    <h3>Inputs <span> + </span> </h3>
                    <Input index={0} />
                </div>
                <hr />
                <div>
                    <h3>Outputs <span> + </span> </h3>
                    <Output index={0} />
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