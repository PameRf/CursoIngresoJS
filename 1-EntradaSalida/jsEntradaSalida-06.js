/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;
	

	//numero1 = document.getElementById("txtIdNumeroUno").value;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	//ambas opciones son validas
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero2 = parseInt(numero2);

	//tomo lo de la caja de texto y me lo devuelve como text no como numero, concatena el string
	resultado = numero1 + numero2;

	alert("El resultado es " + resultado);

}

