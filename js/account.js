// PASSWORD PROTECTION SCRIPT

function TheLogin() {

var password = 'donaldduckdildo';

if (this.document.login.pass.value == password) {
  top.location.href="blog.html";
}
else {
  window.alert("Incorrect password, please try again.");
  }
}
