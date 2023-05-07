import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'

const SignUp = () => {
  let nav = useNavigate();
  let [fname, setFname] = useState("")
  let [lname, setLname] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const submit = (e) => {
    e.preventDefault();
    let dataObject = [{
      fname: fname,
      lname: lname,
      email: email,
      password: password
    }]
    if (fname === "") {
      alert("Please enter your name");
    }
    else if (lname === "") {
      alert("Please enter your surname");
    }
    else if (email === "") {
      alert("Please enter your email");
    }
    else if (password === "") {
      alert("Please enter your password");
    }
    else {
      localStorage.setItem("signupData",JSON.stringify(dataObject));
      setFname("")
      setLname("")
      setEmail("")
      setPassword("")
      alert("Your account has been created")
      nav('/Login')
    }
  }
  return (
    <div className='form'>
      <Nav />
      <form onSubmit={submit}>
        <label>Enter your First Name :</label><input autoFocus className='fname' type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
        <label>Enter your Last Name :</label><input className='lname' type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
        <label>Enter your Email :</label><input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Enter your Password :</label><input style={{ marginBottom: "30px" }} value={password} className='password' type="password" onChange={(e) => setPassword(e.target.value)} /><br />
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
