/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {
     let cantidad;
     let precio = 35;
     let precioFinal;
     let precioConDescuento;
     let marca;
     let IIBB;
     let precioConRecargo;
 
     cantidad = parseInt(document.getElementById("txtIdCantidad").value);
     marca = document.getElementById("Marca").value;
 
     if (cantidad >=6){
         precioFinal = precio * cantidad;
         precioConDescuento = precioFinal - precioFinal * 0.5;
     
         document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
 
                        
         
     }
     switch(cantidad){
         case 5:
             if(marca == "ArgentinaLuz"){
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.4;
             
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
             }
             else{
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.3;
                 
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
             }
         break;
 
         case 4:
             if(marca == "ArgentinaLuz"|| marca== "FelipeLamparas"){
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.25;
                 
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
             }
              else{
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.20;
                     
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
              }
         break;
         case 3:
             if(marca == "ArgentinaLuz"){
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.15;
                 
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
             }
                            
             else if(marca == "FelipeLamparas"){
                 precioFinal = precio * cantidad;
                 precioConDescuento = precioFinal - precioFinal * 0.10;
                     
                 document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
             }
              else{
             precioFinal = precio * cantidad;
             precioConDescuento = precioFinal - precioFinal * 0.05;
                     
             document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
              }
         break;
         case 1:
         case 2:
             precioFinal = precio * cantidad;
                                 
             document.getElementById("txtIdprecioDescuento").value = precioFinal;
         break;
        
     }
     if(precioConDescuento > 120){
        
         IIBB =  precioConDescuento * 0.10;
         precioConRecargo = precioConDescuento + IIBB;
     
         document.getElementById("txtIdprecioDescuento").value = precioConRecargo;
             
         alert("Usted abono $" + IIBB + " de IIBB");
    
     }
 }
