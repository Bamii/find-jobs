function checkUserLoggedIn(dest) {
  return dest.getItem("user-token");
}

function loginUser(tkn, dest) {
  return dest.setItem("user-token", tkn)
}

function signoutUser(dest) {
  return dest.removeItem("user-token")
}

export {
  checkUserLoggedIn,
  loginUser, signoutUser
}