import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {goodsData,addToCart,delFromCart} from '../store/actions';
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
        const {data,addToCart,delFromCart} = this.props;
        //console.log(data);
        return (
            <div>
                <ul>
                    <li>商品库存</li>
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
                            return <li id={item.id} key={"cart"+item.id} style={{marginTop:20}}><span style={{display:'inline-block',width:300}}>Product: {item.title}</span><span style={{display:'inline-block',width:150}}>Price: {item.price.toFixed(2)}</span><span style={{display:'inline-block',width:200}}>Inventory: {item.inventory}</span><button style={{marginLeft:50}} onClick={()=>delFromCart(item.id)} >－</button></li>
                        })
                        : ''
                    }
                </ul>
                <hr/>
                <ul>
                    <li>结算</li>
                    <li>总金额：￥{data.totalPrice.toFixed(2)}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart:(id)=>{
            dispatch(addToCart(id))
        },
        delFromCart: id=>{
            dispatch(delFromCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);