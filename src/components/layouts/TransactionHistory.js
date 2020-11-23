import React, { useState } from 'react';


function Input(props){
    const data = props.data;
    const index = props.index;

    const [ show, set_show ] = useState(false);

    return (
        <div>
            <br />
            <h3 onClick={ event => set_show(!show) }>{ `Input ${index}` }</h3>
            {
                show &&
                <div>
                    <p>Previous Transaction: { data.previous_transaction }</p>
                    <p>Index: { data.index } </p>
                    <p>Value: { data.value } </p>
                    <p>Script: { data.script } </p>
                    <br />
                </div>
            }
        </div>
    );
}


function Output(props){
    const index = props.index;
    const data = props.data;

    const [ show, set_show ] = useState(false);

    return (
        <div>
            <br />
            <h3 onClick={ event => set_show(!show) }>{ `Output ${index}` }</h3>
            {
                show && 
                <div>
                    <p>Value: { data.value } </p>
                    <p>Script: { data.script }</p>
                </div>
            }
            <br />
        </div>
    );
}


function Transaction(props){
    const data = props.data;
    const [ show, set_show ] = useState({inputs: false, outputs: false, all: false});

    return (
        <div>
            <br />
            <h3 onClick={ event => set_show({...show, all: !show.all }) }>{ data.transaction_id }</h3>  
            { show.all &&           
                <div>
                    <p>Description : { data.description }</p>
                    <p>Timestamp: { data.timestamp } </p>
                    <p>Public Key: { data.public_key } </p>
                    <p>Signature: { data.signature } </p>
                    <p>Timestamp: { data.timestamp} </p>
                    <h3 onClick={ event => set_show({...show, inputs: !show.inputs }) }>Inputs</h3>
                    {
                        show.inputs && 
                        data.inputs.map( (val, i) => {
                            return <Input data={val} index={i} key={val + i} />
                        })
                    }
                    <br />
                    <h3 onClick={ event => set_show({ ...show, outputs: !show.outputs }) }>Outputs</h3>
                    {
                        show.outputs && 
                        data.outputs.map( (val, i) => {
                            return <Output data={val} index={i} key={val + i} />
                        })
                    }
                    <br />
                </div>
            }
        </div>
    );
}


function TransactionHistory(props){

    const changePage = props.change_page;
    const [ public_key, set_public_key ] = useState("");
    const [ transactions, set_transactions ] = useState([]);
    const [ error_msg, set_error_msg ] = useState("");

    const changePublicKey = (val) => {
        set_public_key(val);
        console.log(val);
        if(val === ""){
            set_error_msg("");
            return;
        }

        fetch(`/get_client_transactions?public_key=${val}`)
        .then( res => {
            return res.json();
        })
        .then( data => {
            set_transactions(data.transactions);
            if(data.transactions.length === 0){
                set_error_msg(`No Transactions Found for public key: ${ val }`);
            }
        })
        .catch( error => {
            console.log(error);
            set_error_msg("Server Unavailable");
        })
    }

    return (
        <div className="transaction container">
            <h4>
                <span style={{fontSize: 25}}>History</span> &nbsp; &nbsp; 
                <span className="btn" onClick={ event => changePage(0) }>Transaction</span> &nbsp; &nbsp;
                <span className="btn" onClick={ event => changePage(1) }>New Transaction</span> 
            </h4>
            <div className="transaction-history">
                <input type="text" placeholder="Public Key" value={public_key} onChange={ event => {
                    event.persist();
                    changePublicKey(event.target.value);
                }} />
                <p style={{color: "red"}}> &nbsp; &nbsp; { error_msg }</p>

                <div className="transactions">
                    {
                        transactions.map( (val, i) => {
                            return <Transaction data={val} key={val.transaction_id} />
                        })
                    }
                </div>
            </div>
            
        </div>
    );
}

export default TransactionHistory;