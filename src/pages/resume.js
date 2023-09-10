import React from "react";

function Resume(props) {
    return(
        <div>
            <img src={props.myphoto} style={{width: "300px"}}/>
            <h1>{props.name}</h1>
            <p>City: {props.city}</p>
            <p>Phone: {props.phone}</p>
            <p>EMail: {props.email}</p>
            <p>Experience: {props.experience}</p>
            <h3>My skills:</h3>
            <ul>
                {props.skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    )
}
export default Resume;