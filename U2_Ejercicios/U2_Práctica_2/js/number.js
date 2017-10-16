function checkNumber(){
	var number = document.getElementById('int_box_id').value
	if (number > 1){
		document.getElementById("text").innerHTML = "Inserta un n&uacute;mero menor que 1";
	}
	else if (number < -1){
		document.getElementById("text").innerHTML = "Inserta un n&uacute;mero mayor que -1";
	}
	else{
		document.getElementById("text").innerHTML = "Bien hecho!";
	}
}