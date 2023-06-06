//sets data into local storage
export function logout() {}

// Save user in local storage
export function saveUser(email, password, secret) {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    email: email,
    password: password,
    secret: secret,
    login: false,
  };

  const updatedUsers = [...storedUsers, newUser];
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

// Check if user is logged in
export function isLoggedIn() {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  for (const user of storedUsers) {
    if (user.login === true) {
      console.log("user is loged in!");
      return true;
    }
  }
  return false;
}

// User authentication
export function checkLogIn(email, password) {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  for (const user of storedUsers) {
    if (user.email === email && user.password === password) {
      user.login = true;
      localStorage.setItem("users", JSON.stringify(storedUsers));
      return true;
    }
  }
  return false;
}

// User loged out
export function removeUserFromLocalStorage() {
  localStorage.removeItem("users");
}
