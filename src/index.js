const api = `https://randomuser.me/api`;
console.log(api.length);

const addUser = document.getElementById("user-btn");
const newdiv = document.getElementById("user-list");
const search = document.getElementById("search");

const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userJson = await userData.json();
  const user = userJson.results[0];
  appState.push(user);

  console.log("data in appstate array is =>", appState);
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

search.addEventListener("keyup", (e) => {
  console.log(e);
});
