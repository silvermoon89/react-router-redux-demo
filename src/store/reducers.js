const initData = {
    count: 0,
    todoList: [],
    allTodos: [],
    goodsData: [],
    cartData: [],
    soldOut: false
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
            let todoList = state.todoList.map(item =>
                (item.id === action.id) ? { ...item, isCompleted: !item.isCompleted } : item)
            return {
                ...state,
                todoList: [...todoList],
                allTodos: [...todoList]
            }
        case 'FILTER_ALL':
            let allTodos = state.allTodos ? state.allTodos : state.todoList;
            return {
                ...state,
                allTodos: [...allTodos],
                todoList: [...allTodos]
            }
        case 'FILTER_COMPLETED':
            let completedTodos = state.allTodos.filter(item => item.isCompleted);
            return {
                ...state,
                todoList: [...completedTodos]
            }
        case 'FILTER_NOTCOMPLETED':
            let activeTodos = state.allTodos.filter(item => !item.isCompleted);
            return {
                ...state,
                todoList: [...activeTodos]
            }
        case 'GOODS_DATA':
            return {
                ...state,
                goodsData: action.data
            }
        case 'ADD_TO_CART':
            //添加进购物车
            let data = state.goodsData.filter(item => item.id === action.id);  
            let index = state.goodsData.indexOf(data[0]);  //被添加的商品在库存中的索引
            let cart = { ...data[0], inventory: 1 };  //将要添加的商品
            let stock = { ...data[0], inventory: data[0].inventory - 1 };  //库存数量减少
            let otherCart = state.cartData ? state.cartData : [];  //购物车已添加的商品
            let newGoods = state.goodsData;
            let ids = [];  //购物车已添加商品的id

            if (state.cartData && state.cartData.length > 0) {
                state.cartData.map((item, index) => {
                    if (item.id === action.id) {
                        //若新添加的商品在购物车已存在相同id，则增加数量和金额
                        cart = { ...item, price: item.price + data[0].price, inventory: item.inventory + 1 };
                        otherCart.splice(index, 1, cart);  //将修改过后的购物车商品添加进原来的位置
                    }
                    ids.push(item.id);
                });
                // 新添加的商品购物车不存在，直接添加在末尾
                -1 === ids.indexOf(action.id) && otherCart.push(cart);
            } else {
                otherCart.push(cart);
            }
            //更新库存
            newGoods.splice(index,1,stock);

            return {
                ...state,
                goodsData: newGoods,
                cartData: otherCart
            }
        default:
            return state
    }
}

export default reducers;