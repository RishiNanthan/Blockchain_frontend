import React, { useState } from 'react';
import Transaction from '../block/DisplayTransaction';

function TransactionHome(props){
    const getTransaction = props.getTransaction;
    const changePage = props.change_page;
    const [ transaction_id, set_transaction_id ] = useState("");
    const [ transactions, set_transactions ] = useState(null);
    const [ error_msg, set_error_msg ] = useState("");

    const changeTransactionID = (val) => {
        set_transaction_id(val);
        if(val === ""){
            set_error_msg("");
            set_transactions(null);
            return;
        }
        getTransaction(val).then(
            data => {
                if(data.error){
                    set_error_msg(data.error);
                    set_transactions(null);
                }
                else{
                    if(data.transactions.length === 0){
                        set_error_msg("No transactions found for given transaction ID");
                        set_transactions(null);
                    } else {
                        set_error_msg("");
                        set_transactions(data.transactions);
                    }
                }
            }
        )
    }

    return (
        <div className="container transaction">
            <div>
                <button disabled={true}>Transaction</button>
                <button onClick={ event => changePage(1) }>New Transaction</button>
                <button onClick={ event => changePage(2) }>History</button>
            </div>
            <p>
                &nbsp; &nbsp; Transaction refers to the transfer of currency from one party to one or more parties.
                Transaction essentially consists of three parts <i>inputs, outputs, signature, description, timestamp </i>
                and <i>transaction ID</i> (hash).
                <br /><br />
                <b>Inputs</b><br />
                &nbsp; &nbsp; There can be any number of inputs. Every input holds the <i>previous transaction</i> 
                from which the currency has been transferred to your public key, the <i>value</i> of currency 
                received from the transaction. The <i>index</i> of the output which refers to your public key and
                a <i>script</i> on the that tells that you have authorized to spend in this transaction.<br /><br />
                <b>Outputs</b><br />
                &nbsp; &nbsp; There can be any number of outputs. Every output consists of an <i>index</i>, 
                a <i>value</i> which represents the amount of currency transferred and a <i>script</i>.  
                The total value of outputs should match the total value of inputs. If the total value of 
                outputs is greater, the transaction is invalid. If the total value of outputs is lesser, the 
                remaining currency is send to the miner. The script must be satisfied by the next person to
                use the currency transferred. But the script must be secure enough that no other can get the 
                currency than the intended person. <br /><br />
                <b>Signature</b><br />
                &nbsp; &nbsp; This <i>signature</i> is used to verify that what you have added in the transaction 
                has not been tampered by anyone. It also include the <i>public key of the signer</i>. The person 
                who has the first input must sign the transaction. <br /><br />
                <b>Description</b><br />
                &nbsp; &nbsp; The description can be whatever text you have to insert with the transaction. That can
                even be empty. <br /><br />
                <b>Timestamp</b><br />
                &nbsp; &nbsp; It is the time of creating the transaction. <br /> <br />
                <b>Transaction ID</b> <br />
                &nbsp; &nbsp; The transaction ID is created by the hash of the entire data provided in the 
                transaction. It is the unique ID referring to your transaction. It can be helpful later for 
                verifying transaction and to search on blocks. 
            </p>
            <div className="transaction-history">
                <h2>Search Transaction</h2>
                <input type="text" placeholder="Transaction ID" value={transaction_id} onChange={ event => {
                    event.persist();
                    changeTransactionID(event.target.value);
                }} />
                <p style={{color: "red"}}> &nbsp; &nbsp; { error_msg }</p>

                <div className="transactions">
                    {
                        transactions && <h2>Transactions List</h2>
                    }
                    {
                        transactions && transactions.map( (val, i) => {
                            return <Transaction data={val} key={val.transaction_id} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TransactionHome;