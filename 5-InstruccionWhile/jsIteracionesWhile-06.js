function mostrar()
{
	let contador= 0;
	let acumulador = 0;
	let numero;
	let promedio;

	while(contador <5){

		numero = parseInt(prompt("Ingrese un numero: "));
		//while(isNaN) //ingresar validador

		contador++;

		acumulador= acumulador + numero;
	}

	promedio= acumulador/ 5;

	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value= promedio;


}//FIN DE LA FUNCIÓN