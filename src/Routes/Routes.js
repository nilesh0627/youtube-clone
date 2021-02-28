import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from "../Pages/Home/Home"
import Results from '../Pages/Results/Results'
import VideoInfo from '../Pages/VideoDetail/VideoInfo'
function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" render={()=><Home />}/>
        <Route exact path="/results" render={()=><Results />}/>
        <Route exact path="/video/:id" component={VideoInfo} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
