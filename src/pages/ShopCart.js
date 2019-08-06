import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {goodsData,addToCart} from '../store/actions';
import axios from 'axios';
import '../server/mock';

class ShopCart extends Component {
   
    componentDidMount(){
        axios.get('http://test.com').then(res=>{
            store.dispatch(goodsData(res.data))
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        const {data,addToCart} = this.props;
        //console.log(data);
        return (
            <div>
                <ul>
                    {
                        data.goodsData.map(item=>{
                            return <li id={item.id} key={item.id} style={{marginTop:20}}><span style={{display:'inline-block',width:300}}>Product: {item.title}</span><span style={{display:'inline-block',width:150}}>Price: {item.price}</span><span style={{display:'inline-block',width:200}}>Inventory: {item.inventory}</span><button style={{marginLeft:50}} onClick={()=>addToCart(item.id)} disabled={item.inventory === 0}>加入购物车</button></li>
                        })
                    }
                </ul>
                <hr/>
                <ul>
                    <li>购物车</li>
                    {
                        data.cartData ?
                        data.cartData.map(item=>{
                            return <li id={item.id} key={"cart"+item.id} style={{marginTop:20}}><span style={{display:'inline-block',width:300}}>Product: {item.title}</span><span style={{display:'inline-block',width:150}}>Price: {item.price.toFixed(2)}</span><span style={{display:'inline-block',width:200}}>Inventory: {item.inventory}</span><button style={{marginLeft:50}}>－</button></li>
                        })
                        : ''
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart:(id)=>{
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);