import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Counter from '../pages/Counter';
import TodoList from '../pages/TodoList';
import ShopCar from '../pages/ShopCar';

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
                            <Link to='/shopcar'>ShopCar</Link>
                        </li>
                    </ol>
                </div>
                <hr />
                <Route exact path='/' component={Counter}/>
                <Route exact path='/todolist' component={TodoList}/>
                <Route exact path='/shopcar' component={ShopCar}/>
                <Redirect to='/'/>
            </BrowserRouter>
        );
    }
}

export default Routes;