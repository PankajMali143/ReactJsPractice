const api = `https://randomuser.me/api`;
const addUser = document.getElementById("user-btn");

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userJson = await userData.json();
  console.log(userJson.results[0]);
});
