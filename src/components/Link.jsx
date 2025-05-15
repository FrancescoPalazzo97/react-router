import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ link, i }) => {

    const { name, path } = link

    return (
        <li className="nav-item" key={`link-${i}`}>
            <NavLink to={path} className="nav-link" aria-current="page">{name}</NavLink>
        </li>
    )
}

export default Link
