function doLogin() {
  var username = document.getElementByld("username") .value;
  var password = document.getElementByld("password") .value;
  if (username == "" || password == "") {
    alert ("Username e password sono obbligatori");
  }
els {
//chiama il server per effetuare la verifica 
fetch ( "https://www.cacciaapi.altervista.org/login.php/loginIpad', {
method: "POST', // o 'GET'
headers: {
'Content-Type': 'application/json',
},
body: JSON. stringify({
"username": username,
"password": password
})
})
• then(response => response.jeson() )
• then (data => {
  console.log(data);
  window.location.href = "game.html";
});
}
