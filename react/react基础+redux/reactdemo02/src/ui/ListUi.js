import React, {Component} from 'react'
import {List} from "antd"

export default class ListUi extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.type === 'update';
    }

    render() {
        const { deleteList, list_content } = this.props
        return (
            <div style={{margin: '10px',width: '300px'}}>
                <List
                    bordered
                    dataSource={ list_content }
                    renderItem={ (item, index)=>(<List.Item onClick={ ()=>deleteList(index) } >{ item }</List.Item>) }
                />
            </div>
        )
    }
}
