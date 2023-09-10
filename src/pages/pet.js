import React from "react";

function Pet(props) {
    return(
        <div align = "center">
            <img src={props.catjpg} style={{width: "300px"}}/>
            <h1>{props.name}</h1>
            <p>Species{props.spec}</p>
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed}</p>
        </div>

    )
}
export default Pet;