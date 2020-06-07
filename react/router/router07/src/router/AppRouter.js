import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ROUTERCONFIG from './RouterConfig'

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <ul>
                        {ROUTERCONFIG.map((item, index) => {
                            return (
                                <li key={ index + item }>
                                    <Link to={ item.src }>{ item.title }</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="rightMain">
                    {ROUTERCONFIG.map((item, index) => {
                        return (
                            <Route path={ item.src } exact={ item.exact } component={ item.component } key={ index + item }/>
                        )
                    })}
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
