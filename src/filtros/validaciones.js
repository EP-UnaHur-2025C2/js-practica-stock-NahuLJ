const validaciones = [
  {
    nombre: "stock",
    funcion: (product, value) => {
      return product.stock > value;
    }
  },
  {
    nombre: "precio",
    funcion: (product, value) => {
      return product.precio <= value;
    }
  },
  {
    nombre: "nombre",
    funcion: (product, value) => {
      return product.nombre.length < value;
    }
  },
  {
    nombre: "categoria",
    funcion: (product, value) => {
      return value.includes(product.categorias);
    }
  }
]

module.exports = validaciones;