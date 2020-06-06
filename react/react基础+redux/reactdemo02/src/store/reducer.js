import { CHANGE_INPUT, DELETE_LIST_ITEM, LIST_VALUE, INIT_VALUE } from './storeType'
const defaultState = {
    inputValueHint: '',
    list_content: [],
    inputValue: ''
}
export default (state = defaultState,action)=> {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT : {
            newState.inputValueHint = action.value
            newState.inputValue = action.value
            return newState
        }
        case LIST_VALUE : {
            console.log("newState",newState)
            newState.list_content = [...newState.list_content,newState.inputValueHint]
            newState.inputValueHint = ''
            return newState
        }
        case DELETE_LIST_ITEM : {
            newState.list_content.splice(action.index,1)
            return newState
        }
        case INIT_VALUE : {
            console.log("action.data",action.data)
            newState.list_content = action.data
            return newState
        }
        default: {
            break
        }
    }
    return state
}
