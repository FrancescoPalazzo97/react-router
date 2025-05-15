import React from 'react'
import Link from './Link'
import links from '../assets/links'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <img src="/react.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link, index) => (
                            <Link link={link} i={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
