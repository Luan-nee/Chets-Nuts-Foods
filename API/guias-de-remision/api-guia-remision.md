# 🌐 API guías de remisión

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** (**C**rear, **R**eer, **U**pdate, **D**elete).

---

## 🟢 Obtener / Consultar Datos (READ - GET)

Se utiliza para solicitar y obtener uno o varias guías de remisión del servidor. **No modifica** datos.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`GET`** | `/api/guia` | Obtiene la **lista completa** de todas las guías. |
| **`GET`** | `/api/guia/{id}` | Obtiene los detalles de una **Guía específico** usando su ID. |

## 💡 Ejemplo de respuesta

Este es un ejemplo de la carga útil (payload) que se enviaría al endpoint de creación (`POST`).

```json
{
    "data": [
        {
            "id": 1,
            "cliente": "Acme Corp",
            "destino": "New York, NY",
            "transportista": "FedEx",
            "estado": "en tránsito",
            "productos": [
                {
                    "sku": "PRD-X300",
                "cantidad": 5
                },
                {
                    "sku": "PRD-MONITOR27",
                    "cantidad": 10
                }
            ]
        },
        {
            "id": 2,
            "cliente": "Acme Corp",
            "destino": "New York, NY",
            "transportista": "FedEx",
            "estado": "pendiente",
            "productos": [
                {
                    "sku": "PRD-X300",
                "cantidad": 5
                },
                {
                    "sku": "PRD-MONITOR27",
                    "cantidad": 10
                }
            ]
        }
    ]
    
}
```
---

## 🟣 Crear Datos (CREATE - POST)

Se utiliza para enviar datos al servidor y **crear una guía**.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`POST`** | `/api/guia` | Envía los datos de una nueva guía para ser creado en la base de datos. |

### BODY DE PETICIÓN

```json

{
    "cliente": "Acme Corp",
    "destino": "New York, NY",
    "transportista": "FedEx",
    "estado": "en tránsito",
    "productos": [
        {
            "sku": "PRD-X300",
            "cantidad": 5
        },
        {
            "sku": "PRD-MONITOR27",
            "cantidad": 10
        }
    ]
}

```

---

## 🟠 Modificar/Actualizar Datos (UPDATE)

Se utiliza para actualizar los datos de una guía con estado **pendiente** o **en tránsito** existente.

| Verbo HTTP | Endpoint | Tipo de Actualización | Descripción |
| :--- | :--- | :--- | :--- |
| **`PUT`** | `/api/guia/{id}` | **Reemplazo Completo** | Reemplaza completamente la guía con ID **`{id}`** con los datos enviados. Si falta un campo en el body, se borra. |

```json

{
  "cliente": "Acme Corp",
  "destino": "New York, NY",
  "transportista": "FedEx",
  "estado": "en tránsito",
  "productos": [
    {
      "sku": "PRD-X300",
      "cantidad": 5
    },
    {
      "sku": "PRD-MONITOR27",
      "cantidad": 10
    }
  ]
}

```

---

## 🔴 Eliminar Datos (DELETE)

Se utiliza para eliminar una guía específico del servidor.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`DELETE`** | `/api/guia/{id}` | Elimina la guía identificado por **`{id}`**. |