import React,{useState,useEffect} from 'react'
import './App.css';
import {videoSearch,recommendedVideos} from './components/api/youtube'

import Routes from './Routes/Routes'
function App() {
  const [recommended,setRecommended]=useState([])
  const [searchResults,setSearchResults]=useState([])
  const [token,setToken]=useState('')
  const searchVideo=(searchTerm)=>{
    videoSearch(searchTerm).then((data)=>{
      setSearchResults(data.items)
      // setToken(data.nextPageToken)
    })
  }

  const suggestedVideos=()=>{
    recommendedVideos().then((data)=>{
      setRecommended(data.items)
      // setToken(data.nextPageToken)
    })
  }


  useEffect(()=>{
    suggestedVideos()
  },[])


  

  return (
    <div className="App">
      <Routes recommended={recommended} searchVideo={searchVideo} searchResults={searchResults}/>
    </div>
  );
}

export default App;
