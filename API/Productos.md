# 🌐 Documentación de la API para productos

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** (**C**rear, **R**eer, **U**pdate, **D**elete).

---

## 🟢 Obtener / Consultar Datos (READ - GET)

Se utiliza para solicitar y obtener uno o varios recursos del servidor. **No modifica** datos.

| Verbo HTTP | Endpoint | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| **`GET`** | `/api/recursos` | Obtiene la **lista completa** de todos los productos. | `GET https://api.miaplicacion.com/api/recursos` |
| **`GET`** | `/api/recursos/{id}` | Obtiene los detalles de un **recurso específico** usando su ID. | `GET https://api.miaplicacion.com/api/recursos/42` |

---

## 🟣 Crear Datos (CREATE - POST)

Se utiliza para enviar datos al servidor y **crear un nuevo recurso**.

| Verbo HTTP | Endpoint | Descripción | Cuerpo de Petición (Body) |
| :--- | :--- | :--- | :--- |
| **`POST`** | `/api/recursos` | Envía los datos de un nuevo recurso para ser creado en la base de datos. | JSON con los campos necesarios (ej: `{ "nombre": "Nuevo Producto" }`) |

---

## 🟠 Modificar/Actualizar Datos (UPDATE - PUT / PATCH)

Se utiliza para actualizar los datos de un recurso existente.

| Verbo HTTP | Endpoint | Tipo de Actualización | Descripción |
| :--- | :--- | :--- | :--- |
| **`PUT`** | `/api/recursos/{id}` | **Reemplazo Completo** | Reemplaza completamente el recurso con ID **`{id}`** con los datos enviados. Si falta un campo en el body, se borra. |
| **`PATCH`** | `/api/recursos/{id}` | **Actualización Parcial** | Actualiza **solo los campos** especificados en el body para el recurso con ID **`{id}`**. Es el método preferido para actualizar. |

---

## 🔴 Eliminar Datos (DELETE - DELETE)

Se utiliza para eliminar un recurso específico del servidor.

| Verbo HTTP | Endpoint | Descripción |
| :--- | :--- | :--- |
| **`DELETE`** | `/api/recursos/{id}` | Elimina el recurso identificado por **`{id}`**. |