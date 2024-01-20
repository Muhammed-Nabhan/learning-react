import React from 'react'
import './signup.css'
function Signup() {
  return (
    <div className='signup-card'>
      <h1>Registration form</h1>
      <form>
        <label htmlFor=''>First Name</label>
        <input type='text' placeholder='first name'/>
        <label htmlFor=''>Last Name</label>
        <input type='text' placeholder='Last name'/>
        <label htmlFor=''>Email</label>
        <input type='text' placeholder='Email'/>
        <label htmlFor=''>Password</label>
        <input type='text' placeholder='Password'/>
      </form>
    </div>
  )
}

export default Signup
