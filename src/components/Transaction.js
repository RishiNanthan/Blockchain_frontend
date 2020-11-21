import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';
import NewTransaction from './layouts/NewTransaction';
import TransactionHistory from './layouts/TransactionHistory';
import TransactionHome from './layouts/TransactionHome';


class Transaction extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 0, // 0 - home, 1 - new transaction, 2 - history
        }

        this.changePage = this.changePage.bind(this);
    }

    changePage(page){
        this.setState(prev => ({...prev, page: page}));
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                {
                    this.state.page === 0 ?
                    <TransactionHome change_page={ this.changePage } />
                    : this.state.page === 1 ?
                        <NewTransaction change_page={ this.changePage } />
                        :
                        <TransactionHistory change_page={ this.changePage } />
                }
            </Fragment>
        );
    }
}

export default Transaction;