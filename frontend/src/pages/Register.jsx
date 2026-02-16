import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register({ islogin, setIslogin }) {
  const navigate = useNavigate();

  async function handlesignup(e) {
    e.preventDefault();

    // ✅ Create FormData for file upload
    const formData = new FormData();

    formData.append("role", e.target.role.value);
    formData.append("username", e.target.username.value);
    formData.append("email", e.target.email.value);
    formData.append("avtar", e.target.avtar.files[0]);  // file
    formData.append("phone_number", e.target.number.value);
    formData.append("password", e.target.password.value);

    try {
      const res = await fetch("http://localhost:8000/api/user/register/", {
        method: "POST",
        body: formData,   // ✅ no headers here
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        alert("Registration failed");
        return;
      }

      alert("Registered successfully");
      navigate("/login");

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <section className="signup-section">
      <div className="sign_up">
        <h1 className="text">Register</h1>

        <form id="signup" onSubmit={handlesignup} encType="multipart/form-data">
          
          <select name="role" required>
            <option value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
          </select>

          <input
            type="text"
            name="username"
            placeholder="Type Your full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Type Your Email"
            required
          />

          <input
            type="file"
            name="avtar"
            accept="image/*"
            required
          />

          <input
            type="tel"
            name="number"
            minLength={10}
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Enter your Phone No."
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Type Your Password"
            required
          />

          <button type="submit">Submit</button>

          <p>
            Already have an Account?{" "}
            <Link to="/login" className="text1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
