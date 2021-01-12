import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from "../Pages/Home/Home"
import Results from '../Pages/Results/Results'
function Routes({searchVideo,recommended,searchResults}) {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" render={()=><Home searchVideo={searchVideo} recommended={recommended}/>}/>
        <Route exact path="/results" render={()=><Results searchVideo={searchVideo} 
               searchResults={searchResults}/>}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
