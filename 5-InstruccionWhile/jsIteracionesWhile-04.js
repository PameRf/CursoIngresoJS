/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	//pido el dato

	numero =  parseInt(prompt("ingrese un numero de 0 a 9"));
	

	while(!(numero >= 0 && numero <= 9)){ //tengo q poner una condicion verdadera cuando el dato sea invalido 
		
		numero = parseInt(prompt(" Numero incorrecto, ingrese un numero de 0 a 9"));
	}

	document.getElementById("txtIdNumero").value= numero 
	
}//FIN DE LA FUNCIÓN