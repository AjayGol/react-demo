import React from 'react'
import '../styles/Home.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top px-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end">
                    <button className="btn btn-success mx-2" type="submit">
                        Theatre Manager
                    </button>
                    <button className="btn btn-outline-success mx-2" type="submit">
                        My Profile
                    </button>
                    <button className="btn btn-outline-success mx-2" type="submit">
                        Organisation Settings
                    </button>
                </div>
            </div>
        </nav>
    )
}
