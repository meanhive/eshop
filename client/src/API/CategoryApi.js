import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CategoryApi (token) {
    const [category, setCategory] = useState([])
    const [callback,setCallback] = useState(false)

    useEffect(() => {
        if(token) {
            // read products
            const getCategory = async () => {
                const res = await axios.get(`/api/v1/category/getAll`, {
                    headers: {Authorization: token}
                })
                    setCategory(res.data.categories)
            }
        getCategory()
        }
    },[token, callback])

    return {
      categories: [category,setCategory],
      callbck: [callback,setCallback]
  }
}

export default CategoryApi
