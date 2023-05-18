//sets data into local storage
export function setDataInLocalStorage(name, password, secret) {
  localStorage.setItem(
    name,
    JSON.stringify({ password: password, secret: secret })
  );
}

//gets data from local storage
export function getDataFromLocalStorage(name, password) {
  const user = JSON.parse(localStorage.getItem(name));

  if (user == null) {
    console.log("There are no registered users with this email");
  } else if (user.password != password) {
    console.log("wrong password");
  } else if (user.password == password) {
    console.log("you are in :)");
  }
}

//remove data from local storage
export function removeUserFromLocalStorage(value) {}
