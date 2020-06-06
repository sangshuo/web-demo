import React, {PureComponent} from 'react'
import 'antd/dist/antd.css'
import {Input, Button} from 'antd'
import "../css/addUi.css"

class AddUi extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { changeInputValue, inputValue, onKeyUp, changeListValue } = this.props
        return (
            <div>
                <Input
                    placeholder={ "Write Something" }
                    className={ "inputAdd" }
                    style={ {width: '250px'} }
                    onChange={ changeInputValue }
                    value={ inputValue }
                    onKeyUp={ onKeyUp }
                />
                <Button type="primary" onClick={ changeListValue }>增加</Button>
            </div>
        )
    }
}

export default AddUi
