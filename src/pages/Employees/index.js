import axios from 'axios'
import React,{ useEffect, useState }  from 'react'
import './style.css'

const Employees = () => {

  const [employees, setEmployees] = useState([])

      const getAllEmployees = async() => {
        await axios.get(' https://fakerapi.it/api/v1/persons?_quantity=20 ')
          .then(response => {
            setEmployees(response.data.data)
          });
      }

      useEffect(() => {
        getAllEmployees()
      }, [])


      console.log(employees)


  return (
    <div>Employees</div>
  )
}

export default Employees