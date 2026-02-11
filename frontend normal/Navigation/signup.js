
const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const response =  await fetch("http://localhost:8000/api/login/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    });

     const result = await response.json();
  alert(result.message);

});

