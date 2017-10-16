function changeImage(){
	var img = document.getElementById("sobre");
	if(img.src.match("img/abierto.PNG")){
		img.src = "img/cerrado.PNG"
	} else {
		img.src = "img/abierto.PNG"
	}
}