function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 12|| edad >=18){
		alert("Usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN