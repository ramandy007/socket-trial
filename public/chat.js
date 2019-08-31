var socket = io.connect("http://localhost:5000");

var token_place = document.querySelector("#token");

socket.on("token", function(data) {
  token_place.innerHTML += "<h1> token number is :" + data.token + " </h1>";
});
