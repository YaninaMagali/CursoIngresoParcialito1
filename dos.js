/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el 
precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let respuesta = 's';
	let nombreArticulo;
	let categoriaArticulo;
	let precioArticulo;
	let cantidadArticulosBebidas = 0;
	let nombreArticuloMayorPrecio;
	let nombreArticuloMayorPrecioLacteos;
	let MayorPrecio = 0;
	let MayorPrecioLacteos = 0;

	do
	{
		nombreArticulo = prompt("Ingrese nombre del articulo").toLowerCase(nombreArticulo);
		categoriaArticulo = prompt("Ingrese categoria articulo (pueden ser solo almacen, lácteos, limpieza o bebidas").toLowerCase(categoriaArticulo);
		precioArticulo = parseInt(prompt("Ingrese precio articulo (no puede ser menor a 0 ni mayor a 1000)"));
		
		//Precios
		if (precioArticulo > 0 && precioArticulo < 1000) 
		{
			if (precioArticulo > MayorPrecio) 
			{
				nombreArticuloMayorPrecio = nombreArticulo;
				MayorPrecio = precioArticulo;
			}
		}
		
		switch (categoriaArticulo) 
		{
			case "lacteos":
			case "lácteos":
				if (precioArticulo > MayorPrecioLacteos) {
					nombreArticuloMayorPrecioLacteos = nombreArticulo;
					MayorPrecioLacteos = precioArticulo;
				}
				break;
		
			case "bebidas":
				cantidadArticulosBebidas = cantidadArticulosBebidas + 1;
				break;

			case "almacen":
			case "almacén":
			case "limpieza":
				break;

			default:
				alert("No es ua categoria válida");
				break;
		}
		respuesta = prompt("Desea ingresar otra? s/n");
	}
	while(respuesta=='s'){}

	document.write(
		"nombre Articulo Mayor Precio " + nombreArticuloMayorPrecio + "<br>",
		"cantidad Articulos Bebidas " + cantidadArticulosBebidas + "<br>",
		"nombre Articulo Mayor Precio Lacteos "+ nombreArticuloMayorPrecioLacteos + "<br>",
	)

}//FIN