import React,{useState} from 'react'
import './signup.css'

function Signup() {
 const [formData,setFormData]=useState({
  firstName:''
 })

  return (
    <div className='signup-card'>
      <h1>Registration form</h1>
      <form>
        <label htmlFor=''>First Name</label>
        <input type='text' placeholder='first name' name="firstName"/>
        <label htmlFor=''>Last Name</label>
        <input type='text' placeholder='Last name' name="lastName" />
        <label htmlFor=''>Email</label>
        <input type='text' placeholder='Email' name="email"/>
        <label htmlFor=''>Password</label>
        <input type='password' placeholder='Password' name="password" />
        <button>Sign Up</button>
      </form>

    </div>
  )
}

export default Signup
