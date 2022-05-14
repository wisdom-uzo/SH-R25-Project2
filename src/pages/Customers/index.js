import axios from 'axios'
import React,{useState, useEffect} from 'react'
import './style.css'

const Customers = () => {

  const [customers, setCustomers] = useState([])

      const getAllCustomers = async() => {
        await axios.get('https://fakerapi.it/api/v1/companies?_quantity=20 ')
          .then(response => {
            setCustomers(response.data.data)
          });
      }

      useEffect(() => {
        getAllCustomers()
      }, [])


      console.log(customers)


  return (
    <div>Customers</div>
  )
}

export default Customers