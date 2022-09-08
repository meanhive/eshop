import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dashboard.css"

function SideMenu() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/admin/dashboard">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/allOrders">
                            <span data-feather="file" className="align-text-bottom"></span>
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/products">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/allUsers">
                            <span data-feather="users" className="align-text-bottom"></span>
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Reports
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">
                            <span data-feather="layers" className="align-text-bottom"></span>
                            Profile
                        </NavLink>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Saved reports</span>
                    <NavLink className="link-secondary" to="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" className="align-text-bottom"></span>
                    </NavLink>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Current month
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Last quarter
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Social engagement
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Year-end sale
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default SideMenu
