const express = require("express");
const validaciones = require("./filtros/validaciones.js")
const app = express()
const productos = require("../data/productos.json")

app.use(express.json());

const PORT = 3001;

const filtrar = (funciones) => {
  return productos.filter((p) => funciones.every((f) => getValidacion(f).funcion(p,f.values)));
};

const getValidacion = (funcion) => {
  const validacion = validaciones.find((v) => v.nombre === funcion.fn);
  return validacion;
};

/*
console.log(getValidacion(  {
    "fn": "stock",
    "values": 10
  }))

console.log(getValidacion(  {
    "fn": "categoria",
    "values": ["electrodomestico", "deportivo"]
  }))
*/

console.log(filtrar([
  {
    "fn": "stock",
    "values": {"min": 1, "max": 10}
  },
  {
    "fn": "categoria",
    "values": ["electrodomestico", "deportivo"]
  },
  {
  "fn": "precio",
  "values": { "min": 100, "max": 50000 }
  }
]))

app.post("/productos/filtrar", (req, res) => {
  const data = req.body;
  const respuesta = filtrar(data);
  res.status(200).json(respuesta);
});

app.get("/productos",(req,res) => {;
  res.status(200).json(productos);
});

app.listen(PORT, () => {
  console.log(`App iniciada en puerto ${PORT}`);
})