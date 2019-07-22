const initData = {
    count: 0,
    todoList: [],
    allTodos: []
}


const reducers = (state = initData, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                    value: action.value,
                    id: action.id,
                    isCompleted: false
                    }
                ],
                allTodos: [
                    ...state.todoList,
                    {
                    value: action.value,
                    id: action.id,
                    isCompleted: false
                    }
                ]
            }
        case 'IS_COMPLETED':
            let todoList = state.todoList.map(item=>
            (item.id === action.id) ? {...item,isCompleted:!item.isCompleted} : item)
            return {
                ...state,
                todoList:[...todoList],
                allTodos:[...todoList]
            }
        case 'FILTER_ALL':
            let allTodos = state.allTodos?state.allTodos:state.todoList;
            return {
                ...state,
                allTodos: [...allTodos],
                todoList: [...allTodos]
            }
        case 'FILTER_COMPLETED':
            let completedTodos = state.allTodos.filter(item=>item.isCompleted);
            return {
                ...state,
                todoList: [...completedTodos]
            }
        case 'FILTER_NOTCOMPLETED':
                let activeTodos = state.allTodos.filter(item=>!item.isCompleted);
                return {
                    ...state,
                    todoList: [...activeTodos]
                }
        default:
            return state
    }
}

export default reducers;