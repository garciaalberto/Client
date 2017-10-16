function checkEmail(){
	var email = document.getElementById('email').value;
	var usuario = email.slice(0,email.indexOf("@"));
	var dominio = email.slice(email.indexOf("@")+1,email.length);
	document.getElementById("text1").innerHTML = "Usuario: " + usuario;
	document.getElementById("text2").innerHTML = "Dominio: " + dominio;
}