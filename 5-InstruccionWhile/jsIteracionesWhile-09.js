/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
  let numero;
  let numeroMin;
  let numeroMax;
  let respuesta;
  let flag= 0;

  do {

	numero= parseInt(prompt("Ingrese un numero"));

	
	while(isNaN(numero)){

	numero = prompt("El valor ingresado no es un numero.Ingrese un numero");

	}

	if (flag == 0){

		numeroMax= numero;
	    numeroMin= numero;
	}
	flag =1;

	if(numero > numeroMax){

		 numeroMax= numero;

	}
	else if (numero < numeroMin){

		numeroMin= numero;

	}



	respuesta = prompt ("Desea ingresar otro numero: s / n").toLowerCase();


	
  }while(respuesta == "s");

  document.getElementById("txtIdMaximo").value=numeroMax;
  document.getElementById("txtIdMinimo").value=numeroMin;

  
}//FIN DE LA FUNCIÓN