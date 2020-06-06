import React, { PureComponent } from 'react'
import store from '../store'
import 'antd/dist/antd.css'
import {INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_LIST, GET_LIST} from './actionLists'
import AddUi from '../ui/addUi'
import ListUi from '../ui/ListUi'

class AllList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list_content: [],
            inputValueHint: '',
            type: ''
        }
        this.changeInputValue = this.changeInputValue.bind(this)
        this.changeListValue = this.changeListValue.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this)
        this.getListVal = this.getListVal.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteList = this.deleteList.bind(this)
        store.subscribe(this.storeChange)
    }
    UNSAFE_componentWillMount() {
        this.getListVal()
    }
    //挂在dom之前
    UNSAFE_componentDidMount() {

    }

    render() {
        const { list_content, inputValue, type  } = this.state
        const { changeInputValue, onKeyUp, changeListValue, deleteList  } = this
        return (
            <div>
                <AddUi
                    changeInputValue = { changeInputValue }
                    inputValue = { inputValue }
                    onKeyUp = { onKeyUp }
                    changeListValue = { changeListValue }
                />
                <ListUi
                    deleteList = { deleteList }
                    list_content = { list_content }
                    type = { type }
                />
            </div>
        )
    }

    /*
        修改inputValue
    */
    changeInputValue(e) {
        this.setState({ type: '' })
        store.dispatch(INPUT_VALUE(e.target.value))
    }

    changeListValue() {
        if (this.state.inputValue.length === 0) {
            alert("输入内容不能为空")
            return
        }
        this.setState({ type: 'update' })
        store.dispatch(CHANGE_LIST_VALUE())
    }

    /*
        监听store变化事件
     */
    storeChange(e) {
        let types = ''
        if (this.state.list_content.toString() !== store.getState().list_content.toString()) {
            types =  'update'
        } else {
            types =  ''
        }
        this.setState(
            {
                inputValue: store.getState().inputValueHint,
                list_content: store.getState().list_content,
                type: types
            }
        )
    }

    /*
        监听键盘事件
     */
    onKeyUp(e) {
        switch (e.keyCode) {
            case 13: {
                this.changeListValue()
                break
            }
            default: {
                break
            }
        }
    }
    deleteList(index) {
        store.dispatch(DELETE_LIST(index))
    }
    getListVal() {
        const action = GET_LIST()
        store.dispatch(action)
    }
}

export default AllList
