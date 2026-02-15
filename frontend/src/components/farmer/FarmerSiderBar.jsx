import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./FarmerSiderBar.css";

export default function FarmerSiderBar() {
     const [profile, setProfile] = useState(null);
      console.log(localStorage.getItem("userId"));
    
        const userId = localStorage.getItem("userId");
    
      useEffect(() => {
        const fetchProfile = async () => {
          try {
            const res = await fetch(
              `http://localhost:8000/api/profile/${userId}/`,
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }
            );
    
            const data = await res.json();
            setProfile(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching profile:", error);
          }
        };
    
        fetchProfile();
      }, [userId]);
  return (
    <div
      style={{
        width: "220px",
        background: "yellowgreen",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        position: "fixed",
        top: "10vh",
        left: 0,
        zIndex: 100,
        maxHeight: "85vh",
        border: "1px solid gray",
        overflow:"hidden",
      }}
    >

      <h2 className="text-2xl">Farmer Panel</h2>

      <div>
            <h2 className="text-xs">Profile</h2>
            {profile ? (
          <div>
            <p>Role: {profile.role}</p>
            <p>Name: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>phone number: {profile.phone_number}</p>
            {/* <p>avtar:{profile.avatar}</p> */}
            <img src={profile.avatar} alt={`${profile.username} photo`} />
          </div>
            ) : (
          <p>Loading...</p>
            )}
      </div>

      <Link to="profile">Profile</Link>
      <Link to="dashboard" style={{ display: "block", color: "white" }}>
        Dashboard
      </Link>
    </div>
  );
}
