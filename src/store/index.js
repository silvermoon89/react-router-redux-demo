import reducers from './reducers'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//thunk 是中间件，只有使用中间件dispatch才能触发函数，不然会报错

let store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store;