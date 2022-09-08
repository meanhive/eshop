import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import SideMenu from './SideMenu';

function AllUsers() {
    const data = useContext(GlobalContext);
    const [products] = data.productApi.products;
    const [allUsers] = data.authApi.allUsers
    const [user, setUser] = useState(false)

    const [isEdit, setIsEdit] = useState({})

    const toggleEdit = (userId) => {
        let user = allUsers.find(item => item._id === userId)
        setUser(user)
    }

    const readValue = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const cancelEdit = () => {
        setIsEdit(false)
    }

    const editRoleHandler = (e) => {
        e.preventDefault();
        console.log('role =', user)
    }

    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="row">
                    {/* side menu */}
                    <SideMenu />
                    {/* menu ends */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">All Users</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                {/* options goes here */}
                            </div>
                        </div>
                        <table className="table table-bordered table-striped table-sm">
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers && allUsers.map((item, index) => {
                                        return (
                                            <tr className="text-center" key={index}>
                                                <td> {item.name} </td>
                                                <td> {item.email} </td>
                                                <td> {item.mobile} </td>
                                                <td> {item.role}
                                                    <button data-bs-toggle="modal" data-bs-target="#myRole" onClick={() => toggleEdit(item._id)} className="btn btn-sm btn-link">
                                                        <i className="bi bi-pen-fill"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        {/* modal code */}
                        <div className="modal fade" id="myRole">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Edit Role</h5>
                                        <button data-bs-dismiss="modal" className="btn-close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group mt-2">
                                            <label htmlFor="_id">User Id</label>
                                            <input type="text" name="_id" id="_id" value={user._id} onChange={readValue} className="form-control" readOnly />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" value={user.name} onChange={readValue} className="form-control" required />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" value={user.email} onChange={readValue} className="form-control" required />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor="mobile">mobile</label>
                                            <input type="text" name="mobile" id="mobile" value={user.mobile} onChange={readValue} className="form-control" required />
                                        </div>


                                        <div className="form-group mt-2">
                                            <label htmlFor="role">Edit role</label>
                                            <select name="role" id="role" value={user.role} onChange={readValue} className="form-select">
                                                <option value="superadmin">Super admin</option>
                                                <option value="user">User</option>
                                                <option value="associate">Delivery associate</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={editRoleHandler} className="btn btn-success">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end modal */}
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllUsers
