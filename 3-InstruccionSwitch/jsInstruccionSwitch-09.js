function mostrar()
{
	let estacion;
	let destino;
	let precio =15000;
	let PrecioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){

			PrecioFinal= precio + precio * 0.2;
			alert("El precio con aumento del 20% es de "+PrecioFinal);
			}
			else if(destino == "Cataratas" || destino == "Cordoba"){
			PrecioFinal= precio - precio * 0.1;
			alert("El precio con descuento del 10% es de "+PrecioFinal);
			}
			else{

				PrecioFinal= precio - precio * 0.2;
				alert("El precio con descuento del 20% es de "+PrecioFinal);

			}
			break;
			case "Verano":
				if(destino == "Bariloche"){
	
				PrecioFinal= precio - precio * 0.2;
				alert("El precio con descuento del 20% es de "+PrecioFinal);
				}
				else if(destino == "Cataratas" || destino == "Cordoba"){
				PrecioFinal= precio + precio * 0.1;
				alert("El precio con aumento del 10% es de "+PrecioFinal);
				}
				else{
	
					PrecioFinal= precio + precio * 0.2;
					alert("El precio con aumento del 20% es de "+PrecioFinal);
	
				}
				break;

			case "Verano":
				if(destino == "Bariloche"){
		
				PrecioFinal= precio - precio * 0.2;
				alert("El precio con descuento del 20% es de "+PrecioFinal);
				}
				else if(destino == "Cataratas" || destino == "Cordoba"){
				PrecioFinal= precio + precio * 0.1;
				alert("El precio con aumento del 10% es de "+PrecioFinal);
				}
				else{
		
				PrecioFinal= precio + precio * 0.2;
				alert("El precio con aumento del 20% es de "+PrecioFinal);
		
				}
				break;
			case "Otoño":
			case "Primavera":
				
				if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata"){
				PrecioFinal= precio + precio * 0.1;
				alert("El precio con aumento del 10% es de "+PrecioFinal);
				}
				else{
			
				alert("El precio sin descuento "+ precio);
				}
				break;
	}



}//FIN DE LA FUNCIÓN