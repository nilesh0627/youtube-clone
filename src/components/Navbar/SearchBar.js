import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import {videoSearch,searchQuery} from '../../Redux/actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
const SearchBar = ({videoSearch,searchQuery}) => {
    let history=useHistory()
    const [term,setTerm]=useState('')
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        searchQuery(term)
        videoSearch(term)
        history.push('/results')
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="header__form">
           <input type="text" name="term" value={term} onChange={handleChange} placeholder="Search"/>
            <button onClick={handleSubmit}><SearchIcon className="header__form__icon"/></button> 
        </form>
        </>
    )
}

const mapDispatchToProps={
    videoSearch:videoSearch,
    searchQuery:searchQuery
}

export default connect(null,mapDispatchToProps)(SearchBar)
