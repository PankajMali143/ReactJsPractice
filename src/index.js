const api = `https://randomuser.me/api`;
console.log(api.length);

const addUser = document.getElementById("user-btn");
const searchInput = document.getElementById("search");
const newdiv = document.getElementById("user-list");

const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userJson = await userData.json();
  const user = userJson.results[0];
  appState.push(user);

  domRender(appState);
});

const domRender = (stateArr) => {
  newdiv.innerHTML = null;
  stateArr.forEach((userObj) => {
    const userEle = document.createElement("div");
    userEle.innerHTML = `<div>
  ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}
  </div>`;
    newdiv.appendChild(userEle);
  });
};

searchInput.addEventListener("keyup", (e) => {
  const filterdAppState = appState.filter((user) =>
    user.name.first.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  domRender(filterdAppState);
});
