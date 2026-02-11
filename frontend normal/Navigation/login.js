const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  console.log("Full Data:", data);
  console.log("Username:", data.username);
  console.log("Password:", data.password);
  

fetch("http://localhost:8000/api/login/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

});

