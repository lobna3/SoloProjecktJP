import React,{useState} from 'react'

const Search = (props) => {
    const[name,setName]=useState("")
    {console.log(props)}
    return (
        <div className='searchForm'>
            <input type="text" placeholder="looking for ..." className='search' value={name} 
            onChange={(e)=>{setName(e.target.value)}}
            />
            <button className='searchButton' onClick={()=>{
              props.search(name)
            }}>&#x1F50E;</button>
        </div>
    )
}

export default Search