import React, { useState } from 'react';
import Transaction from '../block/DisplayTransaction';


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
            <button onClick={ event => changePage(0) }>Transaction</button>
            <button onClick={ event => changePage(1) }>New Transaction</button>
            <button disabled={ true } >History</button> 

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