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
              `http://localhost:8000/api/user/profile/${userId}/`,
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
    <div className="farmer-sidebar">

        <div className="side-profile">
            <h2 className="text-xs">Profile</h2>
            {profile ? (
          <div className="profile-data">
            <img className="profile-img" src={profile.avtar} alt={`${profile.username} photo`} />
            <p>Role: {profile.role}</p>
            <p>Name: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>phone number: {profile.phone_number}</p>
            {/* <p>avtar:{profile.avatar}</p> */}
          </div>
            ) : (
          <p>Loading...</p>
            )}
        </div>

        <div  className="side-navbar">
            <Link to="profile">Profile</Link>
            <Link to="dashboard">Dashboard</Link>

        </div>
    </div>
  );
}
