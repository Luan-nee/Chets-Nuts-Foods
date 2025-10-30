export interface Producto {
  id: number;
  codigo_producto: string;
  nombre: string;
  descripcion: string;
  stock: number;
  stock_minimo: number;
  precio_venta: number;
  fecha_registro: string;
  fecha_vencimiento: string;
}
