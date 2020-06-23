import React, {Component,PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class XjiejieItem extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps,nextState) {
        return nextProps.xxV !== this.props.xxV
    }
    componentDidUpdate () {
        console.log('组件更新')
    }
    render() {
        console.log("子组件render更新")
        return (
            <li
                onClick={this.delectXiaojiejie.bind(this)
                }>
                {this.props.xxV}
            </li>
        )
    }
    delectXiaojiejie() {
        this.props.deleteItem(this.props.index)
    }
}
XjiejieItem.proptype={
    index: PropTypes.number,
    xxV: PropTypes.string,
    deleteItem: PropTypes.func
}
XjiejieItem.defaultProps={
    xxV: "aaaa"
}

export default XjiejieItem;
