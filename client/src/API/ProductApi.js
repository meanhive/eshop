import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductApi() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)


    // read products
    const getProducts = async () => {
        const res = await axios.get(`/api/v1/product/getAll`)
             setProducts(res.data.products)
    }

    useEffect(() => {
        getProducts()
    },[callback])

    return {
        products: [products, setProducts],
        callback: [callback,setCallback]
  }
}

export default ProductApi
