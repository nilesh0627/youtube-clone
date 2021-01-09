import React,{useState,useEffect} from 'react'
import './App.css';
import {videoSearch,recommendedVideos} from './components/api/youtube'
import Home from "./Pages/Home/Home"
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
      <Home searchVideo={searchVideo} recommended={recommended}/>
      The length : {recommended.length}
    </div>
  );
}

export default App;
