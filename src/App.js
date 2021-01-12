import React,{useState,useEffect} from 'react'
import './App.css';
import {videoSearch,recommendedVideos} from './components/api/youtube'

import Routes from './Routes/Routes'
function App() {
  const [recommended,setRecommended]=useState([])

  const searchVideo=(searchTerm)=>{
    videoSearch(searchTerm)
  }

  const suggestedVideos=()=>{
    recommendedVideos().then((data)=>{
      setRecommended(data.items)
    })
      
  }


  useEffect(()=>{
    suggestedVideos()
  },[])


  

  return (
    <div className="App">
      <Routes searchVideo={searchVideo} recommended={recommended}/>
    </div>
  );
}

export default App;
