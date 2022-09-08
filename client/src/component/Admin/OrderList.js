import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import axios from 'axios'
import SideMenu from './SideMenu';


function OrderList() {
  const context = useContext(GlobalContext);
  const [token] = context.token
  const [userData] = context.authApi.userData

  const [orders, setOrders] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/order/allOrders`, {
        headers: { Authorization: token }
      })
      setOrders(res.data.orders)
    }
    getOrders()
  }, [])


  return (
    <div className="container-fluid">
      <div className="row">
        {/* side menu */}
        <SideMenu />
        {/* menu ends */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Orders</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" className="align-text-bottom"></span>
                This week
              </button>
            </div>
          </div>
          {
            orders ? (
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm">
                  <thead>
                    <tr className='text-center'>
                      <th>Order Id</th>
                      <th>Date</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th> Cart </th>
                      <th>Total</th>
                      <th>Pay Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders && orders.map((item, index) => {
                        return (
                          <tr className="text-center" key={index}>
                            <td> {item.orderId} </td>
                            <td> {new Date(item.createdAt).toLocaleString()} </td>
                            <th> {item.address} </th>
                            <td> {item.orderStatus} </td>
                            <td>
                              <details>
                                <summary>Show Cart</summary>
                                {
                                  item.cart.map((item, index) => {
                                    return (
                                      <div className="card mt-2" key={index} >
                                        <div className="row g-0">
                                          <div className="col-md-4 col-sm-4">
                                            <img src={item.image.url} alt="" className="img-fluid rounded-start" />
                                          </div>
                                          <div className="col-md-8 col-sm-8">
                                            <div className="card-body">
                                              <h5 className="card-title text-uppercase"> {item.title} </h5>
                                              <p>
                                                <span className="float-start"> &#8377;{item.price} </span>
                                                <span className="text-center"> {item.qnty} </span>
                                                <span className="float-end"> Quantity = {item.quantity} </span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </details>
                            </td>
                            <td><strong className="text-success"> &#8377; {item.finalTotal} </strong></td>
                            <td> {item.paymentStatus} </td>
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
  )
}

export default OrderList