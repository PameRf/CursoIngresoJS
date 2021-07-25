/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorPositivo= 0;
	let acumuladorNegativo= 1;
	let respuesta= "s";
	let flag = 0;
	do{
		numero=parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){

			numero=parseInt(prompt("El valor ingresado no es un numero. Ingrese un numero"));
		}

		if(numero >=0){

		acumuladorPositivo= numero + acumuladorPositivo;


		}
 
		else{
			let flag = 1;
			acumuladorNegativo= numero * acumuladorNegativo;
		}

		respuesta=prompt("Desea  ingresar otro numero? s / n");

	
	}while(respuesta == "s");

	document.getElementById("txtIdSuma").value= acumuladorPositivo;
	document.getElementById("txtIdProducto").value =acumuladorNegativo;





}//FIN DE LA FUNCIÓN

//estrategia de resolucion
// 1 declaro variables(numero/acumulador de negativo/ acumulador de positivo/seguir)
// 2 tengo q genrar un bucle do/while
//3 cosas que se tienen q se tienen q hacer dentro del bucle (mientras q el usuario quiera)
//3.1 pido numero
//3.2 valido q sea numero
//3.3 amuestonalizo el signo del numero
// si el numero es positivo  lo sumo a los demas positivos
//si es negativo lo multiplico con los demas negativos

//4 cosas que tengo q hacer desp que el usuario no ingrese mas valores
//4.1 muestro resultados