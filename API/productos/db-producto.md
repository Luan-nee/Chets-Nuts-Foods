# 🌐 ATRIBUTOS DE LOS PRODUCTOS

Esta sección describe los atributos de los productos que se van almacenar.

---

## 🏗️ CAMPOS DE LA TABLA: `Producto`

Este es el formato que se espera para crear o actualizar un recurso, y el que se recibirá al consultarlo.

| Campo                   | Tipo            | Descripción                                                  | Requerido |
| :---------------------- | :-------------- | :----------------------------------------------------------- | :-------- |
| **`id`**                | `INT`           | Identificador único del producto. _Generado por el sistema._ | **Sí**    |
| **`nombre`**            | `VARCHAR(225)`  | Nombre legible del producto.                                 | **Sí**    |
| **`descripcion`**       | `VARCHAR(225)`  | Descripción detallada del producto.                          | **No**    |
| **`stock`**             | `INT`           | Cantidad de producto dentro de la empresa.                   | **Sí**    |
| **`precio_venta`**      | `DECIMAL(10,2)` | Precio de venta unitario del producto.                       | **Sí**    |
| **`codigo_producto`**   | `VARCHAR(10)`   | Identificador único del producto dentro del sistema.         | **Sí**    |
| **`stock_minimo`**      | `INT`           | Cantidad alarmante del producto.                             | **Sí**    |
| **`fecha_registro`**    | `DATE`          | Marca de tiempo de cuándo fue creado el producto.            | **Sí**    |
| **`fecha_vencimiento`** | `DATE`          | Fecha de vencimiento del producto.                           | **Sí**    |

### Ejemplo de datos a guardar

```json
{
  "id": 145,
  "nombre": "Café Gourmet Blend Oscuro",
  "descripcion": "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
  "stock": 580,
  "precio_venta": 15.99,
  "codigo_producto": "CFE001A",
  "stock_minimo": 100,
  "fecha_registro": "2024-09-01",
  "fecha_vencimiento": "2025-12-31"
}
```
