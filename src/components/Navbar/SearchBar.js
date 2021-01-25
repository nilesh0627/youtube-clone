import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import {videoSearch} from '../../Redux/actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
const SearchBar = ({videoSearch}) => {
    const [term,setTerm]=useState('')
    const [redirectToResults,setRedirectToResults]=useState(false)
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        videoSearch(term)
        setRedirectToResults(true)
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="header__form">
           <input type="text" name="term" value={term} onChange={handleChange} placeholder="Search"/>
            <button onClick={handleSubmit}><SearchIcon className="header__form__icon"/></button> 
        </form>
        {redirectToResults && <Redirect to="/results"/>}
        </>
    )
}

const mapDispatchToProps={
    videoSearch:videoSearch
}

export default connect(null,mapDispatchToProps)(SearchBar)
