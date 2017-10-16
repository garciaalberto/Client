function calculate(){
	var number = document.getElementById('int_box_id').value
	var area = 3.14159265 * number * number
	var longitud = 2 * 3.14159265 * number
	document.getElementById("text").innerHTML = "El &aacute;rea es de" + area + " y la longitud de " + longitud;
}