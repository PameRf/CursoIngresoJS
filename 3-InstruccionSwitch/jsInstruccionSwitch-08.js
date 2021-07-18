function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;
		case "Ushuaia":
		case "Bariloche":
		    alert("Hace frio");
		    break;
		
	}
}//FIN DE LA FUNCIÓN