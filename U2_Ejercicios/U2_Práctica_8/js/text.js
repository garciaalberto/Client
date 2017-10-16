function checkText(){
	var texto = document.getElementById('texto').value;
	var primero = texto.slice(0,texto.length/2);
	var segundo = texto.slice(texto.length/2,texto.length);
	document.getElementById("text1").innerHTML = "Primera parte: " + primero;
	document.getElementById("text2").innerHTML = "Segunda parte: " + segundo;
}