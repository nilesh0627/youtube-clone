import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import {setRecommended} from './Redux/reducers/setRecommended'
import {setSearchResults} from './Redux/reducers/setSearchResults'
import {setSearchQuery} from './Redux/reducers/setSearchQuery'
import {setCurrentVideo} from './Redux/reducers/setCurrentVideo'
const youtubeReducer=combineReducers({
                    recommended:setRecommended,
                    searchResults:setSearchResults,
                    searchQuery:setSearchQuery,
                    currentVideo:setCurrentVideo
                    })

const store=createStore(youtubeReducer,composeWithDevTools(applyMiddleware(thunk)))                    

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);






// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
