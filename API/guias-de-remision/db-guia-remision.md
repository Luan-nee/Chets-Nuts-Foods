# 🌐 ATRIBUTOS DE LA GUIA DE REMISIÓN

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** y la estructura de datos utilizada.

---

## 🏗️ CAMPOS DE LA TABLA: `Producto`

Este es el formato que se espera para crear o actualizar un recurso, y el que se recibirá al consultarlo.

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| **`id`** | `INTEGER` | Identificador único del producto. *Generado por el sistema.* | **Sí** |
| **`nombre`** | `STRING` | Nombre legible del producto. | **Sí** |
| **`precio`** | `FLOAT` | Precio unitario del producto. | **Sí** |
| **`descripcion`** | `STRING` | Descripción detallada del producto. | **No** |
| **`stock`** | `INTEGER` | Cantidad disponible en inventario. | **Sí** |
| **`fecha_creacion`** | `DATETIME` | Marca de tiempo de cuándo fue creado el producto. | **Sí** |

### Ejemplo de datos a guardar

```json
{
    "id": 101,
    "SKU": "PRD-001",
    "nombre": "Laptop Ultraligera X300",
    "categoria": "alimento",
    "stock_actual": 15,
    "stock_minimo": ,
    "precio": 250.99,
    "descripcion": "Portátil de alto rendimiento con chasis de aluminio.",
    "fecha_creacion": "2024-10-25T10:30:00Z"
}