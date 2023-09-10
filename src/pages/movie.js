import React from "react";

function Movie(props) {
    return (
      <div align = "center">
        <h1>{props.title}</h1>
        <p>Режиссер: {props.director}</p>
        <p>Киностудия: {props.studio}</p>
        <p>Год выпуска: {props.year}</p>
        <img src={props.poster} style={{width: "300px"}}/>
      </div>
    );
  }
  
export default Movie;