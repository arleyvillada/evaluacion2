const inventario = {
  productos: [],
};

function agregarproducto(nombre, precio, cantidad) {
  let producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
  };
  inventario.productos.push(producto);
}

function listarproductos() {
  console.log("producto del inventario");

  inventario.productos.forEach((producto) =>
    console.log(
      `producto: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`
    )
  );
}

function totalinventario() {
  let total = 0;

  inventario.productos.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });

  return total;
}

agregarproducto("carro", 34000000, 12);
agregarproducto("moto", 2100000, 15);
listarproductos();
console.log(`valor total del inventario: ${totalinventario()}`);
