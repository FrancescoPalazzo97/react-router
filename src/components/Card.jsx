import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ item }) => {

    const { id, title, description, image, price, category } = item

    return (
        <NavLink to={`/items/${id}`} className="text-decoration-none text-light col-lg-3 col-md-6 col-sm-1 d-flex align-items-stretch">
            <div className="card border-0">
                <img src={image} className="card-img-top h-50" alt={title} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-truncate">{description}</p>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{category}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card
