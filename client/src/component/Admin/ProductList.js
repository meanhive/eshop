import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../GlobalContext'
import { toast } from 'react-toastify';
import axios from 'axios';
import SideMenu from './SideMenu';
import { NavLink } from 'react-router-dom'
// import "./chart"

function ProductList() {
    const data = useContext(GlobalContext);
    const [userData] = data.authApi.userData
    const [products] = data.productApi.products;


    useEffect(() => {

    }, [products])


    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="row">
                    {/* side menu */}
                    <SideMenu />
                    {/* menu ends */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Products</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                {/* options goes here */}
                            </div>
                        </div>
                        {
                            products ? (
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th colSpan={7}>
                                                    <NavLink to={`/product/create`} className="btn btn-outline-primary"> <i className="bi bi-plus"></i> Create</NavLink>
                                                </th>
                                            </tr>
                                            <tr className='text-center'>
                                                {/* <th>Product Id</th> */}
                                                <th>title</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>stock</th>
                                                <th> qnty </th>
                                                <th>Desc</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products && products.map((item, index) => {
                                                    return (
                                                        <tr className="text-center" key={index}>
                                                            {/* <td> {item._id} </td> */}
                                                            <td> {item.title} </td>
                                                            <th> <img src={item.image.url} className="img-fluid" style={{ width: '50px' }} /> </th>
                                                            <td> {item.price} </td>
                                                            <td> {item.stock} </td>
                                                            <td> {item.qnty} </td>
                                                            <td> {item.desc} </td>
                                                            <td> {item.category} </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table >
                                    {/* end of order table */}
                                </div >
                            ) : (
                                <div className="col-md-12 text-center">
                                    <h3 className="display-3 text-warning"> Hi, {userData.name}, No Orders</h3>
                                </div>
                            )
                        }

                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList