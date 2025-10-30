import { Producto } from "../types/Producto";

const productos: Producto[] = [
  {
    id: 145,
    nombre: "Café Gourmet Blend Oscuro",
    descripcion:
      "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
    stock: 580,
    precio_venta: 15.99,
    codigo_producto: "CFE001A",
    stock_minimo: 100,
    fecha_registro: "2024-09-01",
    fecha_vencimiento: "2025-12-31",
  },
  {
    id: 146,
    nombre: "Té Verde Sencha Orgánico",
    descripcion:
      "Hojas de té verde japonés, de sabor fresco y herbáceo. Empaque de 50g.",
    stock: 1200,
    precio_venta: 9.5,
    codigo_producto: "TVE002B",
    stock_minimo: 250,
    fecha_registro: "2024-10-15",
    fecha_vencimiento: "2026-06-20",
  },
];

const producto: Producto = {
  id: 145,
  nombre: "Café Gourmet Blend Oscuro",
  descripcion:
    "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
  stock: 580,
  precio_venta: 15.99,
  codigo_producto: "CFE001A",
  stock_minimo: 100,
  fecha_registro: "2024-09-01",
  fecha_vencimiento: "2025-12-31",
};

export { productos, producto };
