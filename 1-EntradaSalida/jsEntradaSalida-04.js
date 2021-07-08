/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	nombre = prompt ("Ingrese su nombre");

 //tomo el valor q ecribe el usuario y lo muestro en caja de texto
	document.getElementById("txtIdNombre").value = nombre

}

