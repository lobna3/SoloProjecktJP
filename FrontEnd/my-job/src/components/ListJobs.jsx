import React from 'react'

const ListJobs = (props) => {
  { console.log(props) }

  return (
    <div className="job-list">
      <h1>My List Job</h1>
      {props.listJobs.map((ele,i) => {
        return (
          <div className="job-item" key={i}>
            <span>Job Name: {ele.name}</span>
            <span>Category: {ele.category}</span>
            <button onClick={()=>{props.remove(ele.id)}}>Remove</button>
          </div>
        )
      })}

   
    </div>
  )
}

export default ListJobs