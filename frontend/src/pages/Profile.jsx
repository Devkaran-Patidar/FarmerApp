import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  console.log(localStorage.getItem("userId"));

    const userId = localStorage.getItem("userId");
    // const userId = 1; // Replace with actual user ID retrieval logic

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
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <p>Role: {profile.role}</p>
          <p>Name: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>phone number: {profile.phone_number}</p>
          <p>avtar:{profile.avatar}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
