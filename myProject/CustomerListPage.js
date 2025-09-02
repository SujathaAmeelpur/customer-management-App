import React, {useState} from 'react'
import axios from 'axios'
import './CustomerListPage.css'

const CustomerListPage = () => {
    const [searchParams, setSearchParams] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        AddressDetails:'',
    });

    const [error, setError] = useState(null)
    const [customer, setCustomer] = useState([])

    const handleChange = (e) => {
      setSearchParams({
        ...searchParams,
        [e.target.name]: e.target.value
      })
    }

    const handleSearch = async () => {
        try{
            const response = await axios.get("http://localhost:5000/api/customers", {
                params: searchParams
            });
            if(Array.isArray(response.data)){
                setCustomer(response.data)
                setError(null)
            }
            else{
                
                setError('UnExpected response format')
            }
        }
        catch(err){
           console.error("Error Fetching Customer:", err)
           setError("Failed to fetch Customer")
        }


    }


    return(
        <div className='customer-list-container'>
            <h1>Search Customer</h1>
            <div className='form-conatiner'>
                <label htmlFor = "firstname">First Name</label>
                <input 
                id = "firstname"
                className='input-field'
                type='text'
                value = {searchParams.firstName}
                onChange = {handleChange}
                name = "firstName"
                />
            </div>
            <div className='form-conatiner'>
                <label htmlFor = "lastname">Last Name</label>
                <input
                 id = "lastname"
                className='input-field'
                type='text'
                value = {searchParams.lastName}
                onChange = {handleChange}
                name = "lastName"
                />
            </div>
            <div className='form-conatiner'>
                <label htmlFor = "phonenumber">Phone Number</label>
                <input 
                id = "phonenumber"
                className='input-field'
                type='text'
                value = {searchParams.phoneNumber}
                onChange = {handleChange}
                name = "phoneNumber"
                />
            </div>
            <button onClick = {handleSearch}>Search</button>
            {error && <p className='msg'>{error}</p>}
            
            
        </div>
    )
}

export default CustomerListPage