/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1;
    let producto2;
    let producto3;
    let resultado;

    producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = producto1 + producto2 + producto3;

    alert("El precio final es " +resultado);


}
function Promedio () 
{
    let producto1;
    let producto2;
    let producto3;
    let promedio;

    producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = (producto1 + producto2 + producto3)/3;

    alert("El promedio es " +resultado);

	
}
function PrecioFinal () 
{
    let producto1;
    let producto2;
    let producto3;
    let precio;
    let precioFinal;

    producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    precio = producto1 + producto2 + producto3;
    precioFinal = precio + precio * 0.21;

    alert("El precion Final con el IVA incluido es " +precioFinal.toFixed(2));  
	
}