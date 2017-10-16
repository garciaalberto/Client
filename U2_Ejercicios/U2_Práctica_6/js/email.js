function checkEmail(){
	var usuario = document.getElementById('email').value.split("@")[0];
	var dominio = document.getElementById('email').value.split("@")[1];
	document.getElementById("text1").innerHTML = "Usuario: " + usuario;
	document.getElementById("text2").innerHTML = "Dominio: " + dominio;
}