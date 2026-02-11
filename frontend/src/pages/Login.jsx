import './Login.css'
import { Link } from 'react-router-dom'
import Register from './Register'
import { useNavigate } from 'react-router-dom'

export default function Login({islogin,setIslogin}){
  let navigate =useNavigate();

  async function handlelogin(e) {
    e.preventDefault();
   let data ={
     email : e.target.email.value,
    password : e.target.password.value
   };

 
    // 🔥 Call Django login API
    const res = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    const result = await res.json();
    // result = { token, role }

    setIslogin(true);
    localStorage.setItem("islogin", "true");
    localStorage.setItem("role", result.role);

    // 🔀 Redirect by role
    if (result.role === "farmer") {
      navigate("/farmerhome");
    } else if (result.role === "buyer") {
      navigate("/buyerhome");
    }
  }
    return(
    <div className="login_page">
        <h1>Login</h1>

        <form id="login" onSubmit={handlelogin} >

          <input
            type="text"
            id="email"
            name="email"
            // autoComplete="username"
            placeholder='Type Your Email'
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder='Type Your Password'
            required
          />

          <button type="submit">Submit</button>

          <p>Don't have an Account?<Link to="/register" >sign up</Link></p>
        </form>
      </div>
    )
}