//Entrega 03
//E-commerce

const categorias = ['ROPA', "ACCESORIOS", 'CALZADO']


class Item {
  constructor(id, nombre, precio, categoria) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio)
    this.categoria = categoria;
  }
  taxIva() {
    this.precio = this.precio * 1.21;
  }
}

const products = [];

products.push(new Item(1,'Jeans',3000,categorias[0]));
products.push(new Item(2,'Camisa',1500,categorias[0]));
products.push(new Item(3,'Billetera',2000,categorias[1]));
products.push(new Item(4,'Cinturon',1700,categorias[1]));
products.unshift(new Item(5,'Zapatillas',5000,categorias[2]));
products.push(new Item(6, 'Lentes',7000,categorias[1]))

console.log(products);
  
for (const item of products) {
  item.taxIva ();
  alert('PRODUCTO # '+item.id+'\n'+
        'NOMBRE: '+item.nombre+'\n'+
        'PRECIO: $'+item.precio+'\n');
}
