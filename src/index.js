//took api data in variable
const api = `https://randomuser.me/api`;

//calling the  html element using id
const addUser = document.getElementById("user-btn");
const newdiv = document.getElementById("user-list");
const search = document.getElementById("search");
const sortdesc = document.getElementById("sort-desc");
const sortasc = document.getElementById("sort-asc");

//used empty array
const appState = [];

class User {
  constructor(title, firstname, lastname, gender, email) {
    this.name = `${title} ${firstname} ${lastname}`;
    this.emil = email;
    this.gender = gender;
  }
}

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
  const classUser = new User(
    user.name.title,
    user.name.first,
    user.name.last,
    user.gender,
    user.email
  );
  console.log(classUser);
  appState.push(classUser);
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
  Name :${userObj.name}

  <ol>
    <li>${userObj.gender}</li>
    <li>${userObj.email}</li>
    </ol>
  </div>`;

    //and finally we are appending data to div
    newdiv.appendChild(userEle);
  });
};

search.addEventListener("keyup", (e) => {
  console.log(e, search.value);
  const fillterAppstate = appState.filter(
    (user) =>
      user.name.toLowerCase().includes(search.value.toLowerCase()) ||
      user.gender.toLowerCase().includes(search.value.toLowerCase()) ||
      user.email.toLowerCase().includes(search.value.toLowerCase())
  );
  domRender(fillterAppstate);
});

sortdesc.addEventListener("click", () => {
  const stateArrCopy = [...appState];
  stateArrCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
  domRender(stateArrCopy);
});

sortasc.addEventListener("click", () => {
  const stateArrCopy = [...appState];
  stateArrCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
  domRender(stateArrCopy);
});
