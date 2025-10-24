# 🌐 API producto

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** (**C**rear, **R**eer, **U**pdate, **D**elete).

---

## 🟢 Obtener / Consultar Datos (READ - GET)

Se utiliza para solicitar y obtener uno o varios productos del servidor. **No modifica** datos.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`GET`** | `/api/producto` | Obtiene la **lista completa** de todos los productos. |
| **`GET`** | `/api/producto/{id}` | Obtiene los detalles de un **Producto específico** usando su ID. |

```json
{
    "data": [
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
        },
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
    ]
    
}
```

---

## 🟣 Crear Datos (CREATE - POST)

Se utiliza para enviar datos al servidor y **crear un nuevo producto**.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`POST`** | `/api/producto` | Envía los datos de un nuevo producto para ser creado en la base de datos. |

### BODY DE PETICIÓN

```json

{
    "SKU": "PRD-001",
    "nombre": "Laptop Ultraligera X300",
    "categoria": "alimento",
    "stock_actual": 15,
    "stock_minimo": 5,
    "precio": 10.99,
    "descripcion": "Portátil de alto rendimiento con chasis de aluminio.",
}

```

---

## 🟠 Modificar/Actualizar Datos (UPDATE)

Se utiliza para actualizar los datos de un producto existente.

| Verbo HTTP | Endpoint | Tipo de Actualización | Descripción |
| :--- | :--- | :--- | :--- |
| **`PUT`** | `/api/producto/{id}` | **Reemplazo Completo** | Reemplaza completamente el producto con ID **`{id}`** con los datos enviados. Si falta un campo en el body, se borra. |

```json

{
    "SKU": "PRD-002",
    "nombre": "Laptop Ultraligera X300",
    "categoria": "alimento",
    "stock_actual": 15,
    "stock_minimo": 5,
    "precio": 10.99,
    "descripcion": "Portátil de alto rendimiento con chasis de aluminio.",
}

```

---

## 🔴 Eliminar Datos (DELETE)

Se utiliza para eliminar un producto específico del servidor.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`DELETE`** | `/api/producto/{id}` | Elimina el producto identificado por **`{id}`**. |