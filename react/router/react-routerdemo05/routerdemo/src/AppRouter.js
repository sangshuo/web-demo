import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function List() {
    return <h2>Hello List Router</h2>
}
function Index() {
    return <h2>Hello World</h2>
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to= '/'>首页1</Link></li>
                <li><Link to= '/List/'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Index}/>
            <Route path={'/List/'} exact component={List}/>
        </Router>
    )
}
export default AppRouter
