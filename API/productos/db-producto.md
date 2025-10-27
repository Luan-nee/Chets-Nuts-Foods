# 🌐 ATRIBUTOS DE LOS PRODUCTOS

Esta sección describe los atributos de los productos que se van almacenar.

---

## 🏗️ CAMPOS DE LA TABLA: `Producto`

Este es el formato que se espera para crear o actualizar un recurso, y el que se recibirá al consultarlo.

| Campo                | Tipo         | Descripción                                                  | Requerido |
| :------------------- | :----------- | :----------------------------------------------------------- | :-------- |
| **`id`**             | `INTEGER`    | Identificador único del producto. _Generado por el sistema._ | **Sí**    |
| **`SKU`**            | `VARCHAR(7)` | Código único del producto.                                   | **Sí**    |
| **`nombre`**         | `STRING`     | Nombre legible del producto.                                 | **Sí**    |
| **`categoria`**      | `STRING`     | Indica a la categoria que pertenece el producto.             | **Sí**    |
| **`descripcion`**    | `STRING`     | Descripción detallada del producto.                          | **No**    |
| **`stock_actual`**   | `INTEGER`    | Cantidad de producto dentro de la empresa.                   | **Sí**    |
| **`stock_minimo`**   | `INTEGER`    | Cantidad alarmante del producto.                             | **Sí**    |
| **`precio`**         | `FLOAT`      | Precio unitario del producto.                                | **Sí**    |
| **`descripcion`**    | `STRING`     | Breve descripción de las caracteristicas del producto.       | **Sí**    |
| **`fecha_creacion`** | `DATETIME`   | Marca de tiempo de cuándo fue creado el producto.            | **Sí**    |

### Ejemplo de datos a guardar

```json
{
  "id": 101,
  "SKU": "PRD-001",
  "nombre": "Laptop Ultraligera X300",
  "categoria": "alimento",
  "stock_actual": 15,
  "stock_minimo": 5,
  "precio": 250.99,
  "descripcion": "Portátil de alto rendimiento con chasis de aluminio.",
  "fecha_creacion": "2024-10-25T10:30:00Z"
}
```
