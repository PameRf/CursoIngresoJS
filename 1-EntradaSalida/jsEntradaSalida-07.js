/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;
	
	//relevo los datos de entrada
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//realizo la operacion
	resultado = numero1 + numero2;

	//muestro el resultado
	alert("El resultado es " + resultado);	

}

function restar()
{
	let numero1;
	let numero2;
	let resultado;
	


	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2;

	alert("El resultado es " + resultado);

}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;
	


	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert("El resultado es " + resultado);
	
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;
	


	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	alert("El resultado es " + resultado);
	
	
}

