/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	//pido el elemento q este en el html- document es una referencia del html
	nombre = document.getElementById("txtIdNombre").value;
	// la manera de obtener el valor de la caja de texto

	alert(nombre);
}


