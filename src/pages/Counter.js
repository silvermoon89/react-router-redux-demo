import React, { Component } from 'react';
import {Decrease,Increase} from '../store/actions';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <p style={{color:'red'}}>{this.props.state.count}</p>
                <button onClick={this.props.Increase}>Increase</button>
                <button onClick={this.props.Decrease}>Decrease</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Increase: () => {
            dispatch(Increase())
        },
        Decrease: () => {
            dispatch(Decrease())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);