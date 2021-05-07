const api = `https://randomuser.me/api`;
console.log(api.length);

const addUser = document.getElementById("user-btn");
const Mydiv = document.getElementById("app");

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userJson = await userData.json();
  const user = userJson.results[0];
  console.log(user);

  const userEle = document.createElement("div");
  userEle.innerHTML = `<div>
  ${user.name.title} ${user.name.first} ${user.name.last}
  </div>`;

  Mydiv.appendChild(userEle);
});
