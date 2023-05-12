import React from 'react'
import '../styles/Home.css'

export default function Sidebar(){
    return(
        <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse"
        >
            <div className="position-sticky mt-5">
                <div className="list-group mx-3 mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3" />
                        <span>Allocations</span>
                    </a>
                </div>

                <div className="list-group mx-3 mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3" />
                        <span>Staff</span>
                    </a>
                </div>

                <div className="list-group mx-3 mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3" />
                        <span>Settings</span>
                    </a>
                </div>

                <div className="list-group mx-3 mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3" />
                        <span>Operations</span>
                    </a>
                </div>

                <div className="list-group mx-3 mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3" />
                        <span>Reports</span>
                    </a>
                </div>

            </div>
        </nav>
    )
}
