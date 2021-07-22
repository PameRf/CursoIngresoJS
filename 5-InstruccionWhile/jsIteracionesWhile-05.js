/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo= prompt("ingrese f ó m .").toLowerCase();

	while(sexo != "f" && sexo != "m"){

		alert("Sexo invalido,ngrese f ó m ");

		sexo= prompt("ingrese f ó m .").toLowerCase();

	}

	document.getElementById("txtIdSexo").value= sexo;



}//FIN DE LA FUNCIÓN