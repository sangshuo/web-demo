import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose


const enhancer = composeEnhancers(applyMiddleware(thunk)) //增强函数，同时引入thunk和redux调试工具

const store = createStore(reducer, enhancer)// 创建redux数据仓库

export default store
