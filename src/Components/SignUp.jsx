import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const SignUp = () => {
  let [fname,setFname] = useState()
  let [lname,setLname] = useState()
  let [email,setEmail] = useState()
  let [password,setPassword] = useState()
  const submit = (e) => {
    e.preventDefault();
    let dataObject = [{
      fname : fname,
      lname : lname,
      email : email,
      password : password
    }]
    localStorage.setItem("signupData",JSON.stringify(dataObject));
  }
  return (
    <div className='form'>
      <Nav />
      <form onSubmit={submit}>
        <label>Enter your First Name :</label><input className='fname' type="text" onChange={(e)=>setFname(e.target.value)} /><br />
        <label>Enter your Last Name :</label><input className='lname' type="text" onChange={(e)=>setLname(e.target.value)} /><br />
        <label>Enter your Email :</label><input className='email' type="email" onChange={(e)=>setEmail(e.target.value)} /><br />
        <label>Enter your Password :</label><input style={{marginBottom:"30px"}} className='password' type="password" onChange={(e)=>setPassword(e.target.value)} /><br />
        <h2>Or</h2>
        <div className="other-links">
          <Link><i className="fa-brands fa-instagram"></i></Link>
          <Link><i className="fa-brands fa-facebook"></i></Link>
          <Link><i className="fa-brands fa-google"></i></Link>
          <Link><i className="fa-brands fa-twitter"></i></Link>
        </div>
        <input type="submit" id='submit' value="Create account" />
      </form>
    </div>
  )
}

export default SignUp
