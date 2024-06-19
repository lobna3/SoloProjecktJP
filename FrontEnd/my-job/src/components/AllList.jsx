import React from "react";

const AllList = (props) => {
    { console.log(props) }

    return (
        <div className="all-post">
            {props.jobs.map((ele, i) =>
                <div className="blog-list-item" key={i}>
                    <div className="blog-list-item-title">{ele.name}</div>
                    <div className="blog-list-item-byline">
                        <span className="blog-list-item-byline-author"> {ele.descreption} </span>

                    </div>
                    <div className="blog-list-item-lede">
                        <span>{ele.category}</span>
                        <br></br>
                        <span>{ele.city}</span>
                        <br></br>
                        <span>{ele.email}</span>
                    </div>
                    <div className="blog-list-item-lede">
                        <button onClick={()=>{props.change("oneJob",ele)}}>More Details</button>
                        <button onClick={()=>{props.change("updateJob",ele)}}>Update</button>
                        <button onClick={()=>{props.delete(ele.id)}}>Delete</button>

                    </div>
                </div>
            )}

        </div>
    )
}

export default AllList