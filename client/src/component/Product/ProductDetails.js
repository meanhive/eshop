import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext'

function ProductDetails() {
    const data = useContext(GlobalContext);
    const [isAdmin] = data.authApi.isAdmin;

    const params = useParams();
    const [product, setProduct] = useState("")
    const [itemCount, setItemCount] = useState(0)
    const addToCart = data.authApi.addToCart

    const getSingle = async (id) => {
        let res =  await axios.get(`/api/v1/product/get/${id}`)
            setProduct(res.data.product)
    }

    useEffect(() => {
        getSingle(params.id)
    }, [])

    const incItemCount = () => {
        setItemCount(itemCount+1)
    }
    const decItemCount = () => {
            setItemCount(itemCount-1)
    }

  return (
    <div className="container">
        <div className="row">
              <div className="col-md-12 text-center">
                  <h3 className="display-3 text-secondary">Product Details</h3>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className="card border-light">
                      {
                          !product ? null :
                              ( <img src={product.image.url} alt={product.title} className="card-img-top" />)
                        }
                  </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                  <div className="card border-light">
                      <div className="card-header text-center">
                          <h6 className="display-6 card-title text-secondary text-uppercase">  {product.title} </h6>
                      </div>
                      <div className="card-body">
                          <div className="mb-2 position-relative">
                              <span className="badge position-absolute bg-success rounded-pill end-0">
                                    Rating <i className="bi bi-star-fill"></i> 5
                              </span>
                          </div>
                          <div className="mt-4" >
                              <p className="text-warning fs-3"> &#8377; {product.price}
                                  <del className="text-muted ms-3 fs-6">
                                        <small>&#8377; {product.price + (product.price * (10 / 100))} </small>
                                  </del>
                                  <span className="fs-6 text-muted">(inclusive GST) </span>
                              </p>
                          </div>

                          <div className="mt-3">
                              <p><strong className="text-secondary fs-6">Quantity</strong></p>
                              <button className="btn btn-outline-secondary"> {product.qnty} </button>

                              {
                                  isAdmin ? null :
                                      (
                                          <div className="float-end">
                                            {/* <span onClick={decItemCount} className="btn btn-sm btn-danger">
                                                <i className="bi bi-dash"></i>
                                            </span>
                                                <strong> {itemCount} </strong>
                                            <span onClick={incItemCount} className="btn btn-sm btn-success">
                                                <i className="bi bi-plus"></i>
                                            </span> */}
                                        </div>
                                      )
                              }
                          </div>

                          <div className="mt-3">
                              <p><strong className="text-secondary fs-6">Description</strong></p>
                              <p className="text-justify"> {product.desc} </p>
                          </div>

                          <div className="mt-3 d-grid col-8 mx-auto">
                              {
                                  isAdmin ? null :
                                      ( <button onClick={() => addToCart(product)}  className="btn btn-outline-secondary">Add To Cart</button>)
                            }
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ProductDetails
