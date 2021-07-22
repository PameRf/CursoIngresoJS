/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	//pido el dato
	clave=prompt("Ingrese clave: ");

	while( clave != "utn750" ){ //tengo q poner una condicion verdadera cuando el dato sea invalido 
		clave = prompt ("clave incorrecta. Reingrese clave");// vuelvo a pedir el dato
	}

	alert("clave correcta")
}//FIN DE LA FUNCIÓN
