import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
const Login = () => {
  let data = JSON.parse(localStorage.getItem("signupData")) || []
  let obj = "";
  console.log(data)
  data.map((v, i) => {
    obj = v;
  })
  console.log(obj.email)
  let nav = useNavigate();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const submit = (e) => {
    e.preventDefault();
    let dataObject = [{
      email: email,
      password: password
    }]
    if (email === "") {
      alert("Please enter your email");
      return false;
    }
    else {
      if (email !== obj.email) {
        alert("Check your email")
        return false;
      }
    }
    if (password === "") {
      alert("Please enter your password");
      return false;
    }
    else {
      if (password !== obj.password) {
        alert("Check your password")
        return false;
      }
      else {
        localStorage.setItem("signupData", JSON.stringify(dataObject));
        setEmail("")
        setPassword("")
        alert("You have successfully login")
        nav('/AddToCart')
      }
    }
  }
  return (
    <div className='form'>
      <Nav />
      <form onSubmit={submit}>
        <label>Enter your Email :</label><input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Enter your Password :</label><input style={{ marginBottom: "30px" }} value={password} className='password' type="password" onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="submit" id='submit' value="Login" />
      </form>
    </div>
  )
}

export default Login
