import React, { useState } from "react";

const Create = (props) => {
    { console.log(props) }
    const [name, setName] = useState("")
    const [descreption, setDescreption] = useState("")
    const [category, setCategory] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="blog-list-item">
            <form  className="New-Post-Form">
                <h1> Create New Job</h1>
                <input type="text" placeholder="Your Name" value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <textarea placeholder="Your Description" value={descreption}
                    onChange={(e) => { setDescreption(e.target.value) }}
                />

                <input type="text" placeholder="Your Category" value={category}
                    onChange={(e) => { setCategory(e.target.value) }}
                />

                <input type="text" placeholder="Your City" value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />
                
                <input type="text" placeholder="Your Email" value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <button type="submit" onClick={() => {
                     props.add({
                         name: name,
                         descreption: descreption,
                         category: category,
                         city: city,
                         email: email
                     })
                }}>Add Job</button>
            </form>


        </div>
    )
}

export default Create