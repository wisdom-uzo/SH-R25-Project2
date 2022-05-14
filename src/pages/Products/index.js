import axios from 'axios'
import React,{useState, useEffect} from 'react'
import './style.css'

const Products = () => {

  const [products, setProducts] = useState([])

      const getAllProducts = async() => {
        await axios.get('https://fakerapi.it/api/v1/products?_quantity=20 ')
          .then(response => {
            setProducts(response.data.data)
          });
      }

      useEffect(() => {
        getAllProducts()
      }, [])
      
      console.log(products)

  return (
    <div>Products</div>
  )
}

export default Products