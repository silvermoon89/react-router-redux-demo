import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo,isCompleted,filterAll,filterCompleted,filterActiveTodos} from '../store/actions';

let input;
class TodoList extends Component {
    render() {
        const {addTodo,toggleTodo,filterAll,filterCompleted,filterActiveTodos,data} = this.props;
        return (
            <div>
                <input type="text" style={{marginLeft:'10px'}} ref={node=> input = node}/>
                <button style={{marginLeft:'10px'}} onClick={addTodo}>ADD</button>
                <ul>
                    {data.todoList.map(item=>{
                        return <li key={item.id} onClick={()=>toggleTodo(item.id)} style={{textDecoration: item.isCompleted ? 'line-through' :''}}>{item.value}</li>
                    })}
                </ul>
                <div>
                    <button style={{marginLeft:'10px'}} onClick={filterAll}>ALL</button>
                    <button style={{marginLeft:'10px'}} onClick={filterCompleted}>Completed</button>
                    <button style={{marginLeft:'10px'}} onClick={filterActiveTodos}>Not Completed</button>
                </div>
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
        addTodo: () => {
            dispatch(addTodo(input.value));
            input.value=''
        },
        toggleTodo: (id)=>{
            dispatch(isCompleted(id)); 
        },
        filterAll: ()=>{
            dispatch(filterAll()); 
        },
        filterCompleted: ()=>{
            dispatch(filterCompleted()); 
        },
        filterActiveTodos: ()=>{
            dispatch(filterActiveTodos());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);