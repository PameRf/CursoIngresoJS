function mostrar()
{
	let max = 10;
	let min = 1;

	let nota = Math.floor(Math.random()*(max-min + 1) + min);

	if (nota>= 9){
		alert("Excelente " + nota);
	}
	else if (nota> 4){
		alert("Aprobo " + nota);
	}
	else{
		alert("Vamos la proxima se puede " + nota);
	}

	
}//FIN DE LA FUNCIÓN