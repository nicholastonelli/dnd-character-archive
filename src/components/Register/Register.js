import React, {useState} from 'react'

const Register = ({ addUsers }) => {
  const register = {
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  }
  const [registerForm, setRegisterForm] = useState(register)
  const [message, setMessage] = useState(`Register User`)

  const handleChange = (e) => {

    setRegisterForm({
      ...registerForm,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    if (registerForm.password === registerForm.verifyPassword) {
      setMessage(`Welcome ${registerForm.username}  `)
    } else {
      setMessage(`Passwords don't match!`)
    }
    setRegisterForm(register)
    let res = await fetch(`${process.env.REACT_APP_backendURI}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password,
        verifyPassword: registerForm.verifyPassword,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
    let userData = await res.json()
    addUsers(userData)
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmitRegister}>
        <label className="topRegister" htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <p className="spaceRegister">{message}</p>
        <input
          type="text"
          id="username"
          name="txt"
          placeholder="Username"
          required=""
          value={registerForm.username}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
          value={registerForm.email}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={registerForm.password}
          onChange={handleChange}
        />
        <input
          type="password"
          id="verifyPassword"
          name="pswd"
          placeholder="Verify Password"
          required=""
          value={registerForm.verifyPassword}
          onChange={handleChange}
        />
        <button className="login-button">Sign up</button>
      </form>
    </div>
  )
}

export default Register