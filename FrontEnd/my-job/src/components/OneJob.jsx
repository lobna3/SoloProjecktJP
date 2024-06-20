import React from "react";


const OneJob = (props) => {
    { console.log(props) }

    return (
        <div className="blog-list-one" >
            <div className="blog-list-item-title">{props.job.name}</div>
            <div className="blog-list-item-byline">
                <span className="blog-list-item-byline-author">{props.job.descreption}</span>

            </div>
            <div className="blog-list-item-lede">
                <span>{props.job.category}</span>
                <br></br>
                <span>{props.job.city}</span>
                <br></br>
                <span>{props.job.email}</span>
            </div>
            <button onClick={()=>{props.addToList(props.job)}}>To apply</button>
        </div>
    )
}

export default OneJob