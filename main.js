const precio = 35000
const titulo = document.querySelector("#titulo")
const boton = document.querySelector("#boton")
const color = document.querySelector("#inputColor")
const cantidad = document.querySelector("#inputCantidad")


titulo.style.color = "white"



boton.addEventListener ("click" , () => {

    colorFinal.style.display = "block";
    colorFinal.style.backgroundColor = color.value;
    cantidadCompra.textContent = `Cantidad: ${cantidad.value}`;
    precioCompra.textContent =`Precio total: ${cantidad.value * precio}`; 



})

