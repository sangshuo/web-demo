import React, {Component,PureComponent} from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import axios from "axios";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '经由']
        }
    }
    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((data)=>{console.log(data)})
            .catch((error)=>{console.log(error)})
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{
                            console.log("11111",input);
                            console.log("hanshu",this)
                            console.log("this.input",this.input)
                            this.input = input
                        }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    <XiaojiejieItem
                                        key={index + item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                        xxV={item}/>
                                )
                            })

                        }
                    </ul>
                </div>
            </div>
        )
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
        console.log("aaaaaa")
    }

    //增加列表
    addList() {
        if (!this.state.inputValue) {
            alert("增加内容不能为空")
            return
        }
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    //删除列表项
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;
