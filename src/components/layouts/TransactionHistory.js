import React from 'react';


function TransactionHistory(props){

    const changePage = props.change_page;

    return (
        <div className="transaction container">
            <h3 onClick={ event => changePage(0) }>Transaction</h3>
            <button onClick={ event => changePage(1) }>New Transaction</button>
        </div>
    );
}

export default TransactionHistory;