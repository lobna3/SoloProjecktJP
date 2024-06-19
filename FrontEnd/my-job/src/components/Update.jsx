import React, { useState } from "react";

const Update = (props) => {
    { console.log(props) }

    const [name, setName] = useState(props.job.name)
    const [descreption, setDescreption] = useState(props.job.descreption)
    const [category, setCategory] = useState(props.job.category)
    const [city, setCity] = useState(props.job.city)
    const [email, setEmail] = useState(props.job.email)

    return (
        <div className="blog-list-item">
            <div>
                <h1> Update  Job</h1>
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
                     props.updateP({
                         name: name,
                         descreption: descreption,
                         category: category,
                         city: city,
                         email: email
                     },props.job.id)
                }}> Update Job</button>
            </div>


        </div>
    )
}

export default Update