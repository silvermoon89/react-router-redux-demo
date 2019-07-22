let todoId = 0;

export const Increase = ()=>{
    return {
        type: 'INCREASE'
    }
}

export const Decrease = ()=>{
    return {
        type: 'DECREASE'
    }
}

export const addTodo=(value)=>{
    return {
        type: 'ADD_TODO',
        id: todoId++,
        value
    }
}

export const isCompleted=(id)=>{
    return {
        type: 'IS_COMPLETED',
        id
    }
}

export const filterAll=()=>{
    return {
        type: 'FILTER_ALL'
    }
}

export const filterCompleted=()=>{
    return {
        type: 'FILTER_COMPLETED'
    }
}

export const filterActiveTodos=()=>{
    return {
        type: 'FILTER_NOTCOMPLETED'
    }
}