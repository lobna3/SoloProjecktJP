import React from "react";


const OneJob = (props) => {
    { console.log(props) }

    return (
        <div className="blog-list-item" >
            <div className="blog-list-item-title">{props.job.name}</div>
            <div className="blog-list-item-byline">
                <span className="blog-list-item-byline-author">{props.job.descreption}</span>

            </div>
            <div className="blog-list-item-lede">
                <span>{props.job.category}</span>
                <br></br>
                <span>{props.job.city}</span>
            </div>
        </div>
    )
}

export default OneJob