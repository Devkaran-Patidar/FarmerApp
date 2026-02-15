import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./register.css"
import FarmerHome from "./Farmer/farmerHome";
export default function Register({islogin,setIslogin}){
  let navigate = useNavigate();

 async function handlesignup(e) {
    e.preventDefault();
   let data ={
    role: e.target.role.value,
    username: e.target.username.value,
    email : e.target.email.value,
    avtar :e.target.avtar.files[0],
    phone_number: e.target.number.value,
    password : e.target.password.value
   }
   console.log(data)
  //  setIslogin(true)
    // localStorage.setItem("islogin","true")

    // 🔥 Send to Django
    const res = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Registration failed");
      return;
    }


     alert("Registered successfully");
   navigate("/login");

  }

    return(
       <div className="sign_up" >
        
        <h1 className='text-green-500 font-bold text-xl'>Register</h1>

        <form id="signup" onSubmit={handlesignup} >
          <select name="role" required>
  <option value="">Select Role</option>
  <option value="farmer">Farmer</option>
  <option value="buyer">Buyer</option>
</select>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            placeholder='Type Your full Name'
            required
          />
           <input
            type="text"
            id="email"
            name="email"
            // autoComplete="username"
            placeholder='Type Your Email'
            required
          />
          <input
           type="file" 
          name="avtar"
          placeholder="Enter your photo"
          />
           <input
           type="tel"
          name="number"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{10}"
          placeholder="Enter your Phone No."
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

          <p>Do have an Account?<Link to="/login"  className='text-blue-700 text-lg font-bold'>login</Link></p>
        </form>
      </div>
    )
}