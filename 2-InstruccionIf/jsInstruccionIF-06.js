function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >=18){
		alert("Usted  mayor de edad");
	} 
	else if (edad >=13){

		alert("Usted es adolescente");

	}
	else{
		alert("Usted es un niño");
	}


}//FIN DE LA FUNCIÓN