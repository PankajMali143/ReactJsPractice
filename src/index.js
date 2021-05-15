//took api data in variable
const api = `https://randomuser.me/api`;

//calling the  html element using id
const addUser = document.getElementById("user-btn");
const newdiv = document.getElementById("user-list");
const search = document.getElementById("search");

//used empty array
const appState = [];
//added onclick event listener to get api data in another variable
addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  // converting userData into json format
  const userJson = await userData.json();
  console.log(userJson);
  //taking array data in user variable
  const user = userJson.results[0];
  //now pushing only rquired data in appstate array that we have declared
  appState.push(user);
  console.log("data in appstate array is =>", appState);
  //we are calling domRender funtion & passing appstate array
  domRender(appState);
});

const domRender = (stateArr) => {
  //now we are rendering the that data on browser
  newdiv.innerHTML = null;

  stateArr.forEach((userObj) => {
    //here we creating div element in userEle
    const userEle = document.createElement("div");

    userEle.innerHTML = `<div>
  ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}
  </div>`;
    //and finally we are appending data to div
    newdiv.appendChild(userEle);
  });
};

search.addEventListener("keyup", (e) => {
  console.log(e, search.value);
  const fillterAppstate = appState.filter((user) =>
    user.name.first.toLowerCase().includes(search.value.toLowerCase())
  );
  domRender(fillterAppstate);
});
