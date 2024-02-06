var userInfo = document.getElementById("user_info");
let signIn = document.getElementById("signIn");
var userDom = document.getElementById("user");
var logoutBtn = document.getElementById("logout");
let signinBoxLast = document.querySelector(".signin-box-last");

if (sessionStorage.getItem("loginStatus") != null) {
  signIn.style.display = "none";
  userInfo.style.display = "flex";
  signinBoxLast.style.display = "none";
  userDom.innerHTML = sessionStorage.getItem("nameOfUser");
}

logoutBtn.addEventListener("click", function () {
  sessionStorage.clear();
  localStorage.removeItem("productsInCart");
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
});
