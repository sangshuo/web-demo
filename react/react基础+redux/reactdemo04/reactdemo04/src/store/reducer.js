import {  } from './storeType'
const defaultState = {
    inputValue: 'WRITE',
    list_content: ['我叫桑硕', '我叫小明']
}
export default (state = defaultState,action) => {
        let newState = JSON.parse(JSON.stringify(state))
        switch (action.type) {
            case 'changeInputValue': {
                newState.inputValue = action.value
                return newState
            }
            default: {
                break
            }
        }
    return state
}
