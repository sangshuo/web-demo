import Axios from 'axios';
import { CHANGE_INPUT, LIST_VALUE, DELETE_LIST_ITEM, INIT_VALUE } from '../store/storeType'
const axios = Axios.create();

//修改INPUT_VALUE
export const INPUT_VALUE = (value) => ({
    type : CHANGE_INPUT,
    value
})
//更新列表的数据
export const CHANGE_LIST_VALUE = () => ({
    type: LIST_VALUE
})
//初始化列表的数据
export const CHANGE_LIST_VALUE2 = (data) => ({
    type: INIT_VALUE,
    data
})
//删除列表数据
export const DELETE_LIST = (index) => ({
    type: DELETE_LIST_ITEM,
    index: index
})
export const GET_LIST = () => {
    return(dispatch) => {
        axios.get('https://www.fastmock.site/mock/a6c8b3b9fbe72a8e2cef06a8eebf698a/list/list/data')
            .then((res)=>{
                const data = res.data.data
                console.log("data",data)
                const action = CHANGE_LIST_VALUE2(data)
                dispatch(action)
        })
    }
}
