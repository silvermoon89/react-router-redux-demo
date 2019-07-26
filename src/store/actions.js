let todoId = 0;

export const Increase = () => {
    return {
        type: 'INCREASE'
    }
}

export const Decrease = () => {
    return {
        type: 'DECREASE'
    }
}

export const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        value
    }
}

export const isCompleted = (id) => {
    return {
        type: 'IS_COMPLETED',
        id
    }
}

export const filterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

export const filterCompleted = () => {
    return {
        type: 'FILTER_COMPLETED'
    }
}

export const filterActiveTodos = () => {
    return {
        type: 'FILTER_NOTCOMPLETED'
    }
}

export const getData = (dispatch) => {
    fetch('../server/data.json', {
        method: 'GET',
    }).then(response => {
        console.log(response);
        return response.json()
    }).then(res => {
        console.log(res);
        dispatch(goodsData(res))
    }).catch(err=>{
        console.log(err)
    })
}

export const  goodsData =(data)=> {
    return {
        type: 'GOODS_DATA',
        data: data
    }
}

export const addToCart = () => {
    return {
        type: 'ADDTOCART'
    }
}