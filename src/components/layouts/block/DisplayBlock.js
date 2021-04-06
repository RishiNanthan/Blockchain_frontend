import React from 'react';

import Transaction from './DisplayTransaction';



function DisplayBlock(props){

    const data = props.data;
    const show_block = props.show_block;


    return (
        <div className="container">
            <h2>Block ID: { data.block_id } </h2>
            <h3 className="link" onClick={ event => show_block( data.previous_block ) }>Previous Block: { data.previous_block } </h3>
            <p>Timestamp: { data.timestamp } </p>
            <p>Nonce : { data.nonce } </p>
            <p>Version: { data.version } </p>
            <p>Difficulty: { data.difficulty } </p>
            <h2>Transactions</h2>
            <br />
            <div className="container">
                {
                    data.transactions.map( (transaction, ind) => {
                        return (
                            <div key={ transaction.transaction_id + ind}>
                                <Transaction key={ transaction.transaction_id } data={ transaction } />
                            </div> 
                        );
                    })
                }
            </div>
        </div>
    );
}



export default DisplayBlock;