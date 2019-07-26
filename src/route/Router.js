import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Counter from '../pages/Counter';
import TodoList from '../pages/TodoList';
import ShopCart from '../pages/ShopCart';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ol>
                        <li>
                            <Link to='/'>Counter</Link>
                        </li>
                        <li>
                            <Link to='/todolist'>TodoList</Link>
                        </li>
                        <li>
                            <Link to='/shopcart'>ShopCart</Link>
                        </li>
                    </ol>
                </div>
                <hr />
                <Route exact path='/' component={Counter}/>
                <Route exact path='/todolist' component={TodoList}/>
                <Route exact path='/shopcart' component={ShopCart}/>
                <Redirect to='/shopcart'/>
            </BrowserRouter>
        );
    }
}

export default Routes;