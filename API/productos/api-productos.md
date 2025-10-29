# 🌐 API producto

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** (**C**rear, **R**eer, **U**pdate, **D**elete).

---

## 🟢 Obtener / Consultar Datos (READ - GET)

Se utiliza para solicitar y obtener uno o varios productos del servidor. **No modifica** datos.

| Verbo HTTP | Endpoint             | Descripción                                                      |
| :--------- | :------------------- | :--------------------------------------------------------------- |
| **`GET`**  | `/api/producto`      | Obtiene la **lista completa** de todos los productos.            |
| **`GET`**  | `/api/producto/{id}` | Obtiene los detalles de un **Producto específico** usando su ID. |

```json
{
  "data": [
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
    },
    {
      "id": 146,
      "nombre": "Té Verde Sencha Orgánico",
      "descripcion": "Hojas de té verde japonés, de sabor fresco y herbáceo. Empaque de 50g.",
      "stock": 1200,
      "precio_venta": 9.5,
      "codigo_producto": "TVE002B",
      "stock_minimo": 250,
      "fecha_registro": "2024-10-15",
      "fecha_vencimiento": "2026-06-20"
    }
  ]
}
```

---

## 🟣 Crear Datos (CREATE - POST)

Se utiliza para enviar datos al servidor y **crear un nuevo producto**.

| Verbo HTTP | Endpoint        | Descripción                                                               |
| :--------- | :-------------- | :------------------------------------------------------------------------ |
| **`POST`** | `/api/producto` | Envía los datos de un nuevo producto para ser creado en la base de datos. |

### BODY DE PETICIÓN

```json
{
  "nombre": "Café Gourmet Blend Oscuro",
  "descripcion": "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
  "stock": 580,
  "precio_venta": 15.99,
  "codigo_producto": "CFE001A",
  "stock_minimo": 100,
  "fecha_vencimiento": "2025-12-31"
}
```

---

## 🟠 Modificar/Actualizar Datos (UPDATE)

Se utiliza para actualizar los datos de un producto existente.

| Verbo HTTP | Endpoint             | Tipo de Actualización  | Descripción                                                                                                           |
| :--------- | :------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **`PUT`**  | `/api/producto/{id}` | **Reemplazo Completo** | Reemplaza completamente el producto con ID **`{id}`** con los datos enviados. Si falta un campo en el body, se borra. |

```json
{
  "nombre": "Café Gourmet Blend Oscuro",
  "descripcion": "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
  "stock": 580,
  "precio_venta": 15.99,
  "codigo_producto": "CFE001A",
  "stock_minimo": 100,
  "fecha_vencimiento": "2025-12-31"
}
```

---

## 🔴 Eliminar Datos (DELETE)

Se utiliza para eliminar un producto específico de la base de datos.

| Verbo HTTP   | Endpoint             | Descripción                                      |
| :----------- | :------------------- | :----------------------------------------------- |
| **`DELETE`** | `/api/producto/{id}` | Elimina el producto identificado por **`{id}`**. |
