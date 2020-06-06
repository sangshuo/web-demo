import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import { connect } from "react-redux"

class TodoList extends Component {
    render() {
        const { inputValue, list_content, inputChange  } = this.props
        return (
            <div>
                <Input
                    value={ inputValue }
                    style={ {width: '300px'} }
                    onChange={inputChange}
                /><Button type={ "primary" }>提交</Button>
                <List
                    style={ {width: '365px'} }
                    bordered
                    dataSource={ list_content }
                    renderItem = { (item, index) => (
                        <List.Item>{ item }</List.Item>
                    )}
                />
            </div>
        )
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list_content: state.list_content
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            console.log(e.target.value)
            let action = {
                type: 'changeInputValue',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList)
