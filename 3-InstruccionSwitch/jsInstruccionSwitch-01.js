function mostrar()
{
	//swich no toma condicion sino una variable

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("Que comienses bien el año!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas");
			break;

	}
	



}//FIN DE LA FUNCIÓN