import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {goodsData,getData} from '../store/actions';
import axios from 'axios';
import '../server/mock';

class ShopCart extends Component {
   
    componentDidMount(){
        axios.get('http://test.com').then(res=>{
            console.log(res.data);
            store.dispatch(goodsData(res.data))
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    {
                        this.props.products.map(item=>{
                            return <li id={item.id} key={item.id} style={{marginTop:20}}><span style={{display:'inline-block',width:300}}>Product: {item.title}</span><span style={{display:'inline-block',width:150}}>Price: {item.price}</span><span style={{display:'inline-block',width:200}}>Inventory: {item.inventory}</span><button style={{marginLeft:50}}>加入购物车</button></li>
                        })
                    }
                </ul>
                <hr/>
                <ul>
                    <li>购物车</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        products: state.goodsData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: () => {
            dispatch(getData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);