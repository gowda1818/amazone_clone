var useremail = document.getElementById("userEmail");
var password = document.getElementById("userPassword");
var loginBtn = document.getElementById("sign_in");
var checkbox = document.getElementById("checkbox");

sessionStorage.clear();
localStorage.removeItem("productsInCart");

if (localStorage.getItem("rememberme") != null) {
  useremail.value = JSON.parse(localStorage.getItem("rememberme")).name;
  password.value = JSON.parse(localStorage.getItem("rememberme")).pass;
}

function remembermefun() {
  if (checkbox.value == "checked") {
    checkbox.value = "";
  } else if (checkbox.value == "") {
    checkbox.value = "checked";
  }
}

var userdataa = JSON.parse(localStorage.getItem("usersData"));

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (useremail.value === "" || password.value === "") {
    alert("please fill the data");
  } else {
    var j = -1;
    for (let i = 0; i < userdataa.length; i++) {
      if (userdataa[i].mail == useremail.value) {
        j = i;
        break;
      }
    }
    if (j >= 0 && userdataa[j].pass == password.value) {
      sessionStorage.setItem("loginStatus", "true");
      sessionStorage.setItem("nameOfUser", userdataa[j].uName);

      if (checkbox.value == "checked") {
        var iiii = { name: useremail.value, pass: password.value };
        localStorage.setItem("rememberme", JSON.stringify(iiii));
      } else {
        localStorage.removeItem("rememberme");
      }

      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("username or password ar wrong");
    }
  }
});
