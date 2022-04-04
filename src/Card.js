import React from "react";
import './Card.scss';

export const Card = (props) => {
    const {title, url, description1, description2} = props;
    return (
        <div className="card">
        <img src={url} alt={title} />
        <div class="card-body">
            <h3>{title}</h3>
            <p>{description1}</p>
            <p>{description2}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
}