# 🌐 ATRIBUTOS DE LA GUIA DE REMISIÓN

Esta sección describe los atributos de las guías de remisión que se van almacenar

---

## 🏗️ Esquema Principal: `GuiaRemision`

Este es el objeto de nivel superior que se envía para crear el documento.

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| **`id`** | `INTEGER` | Identificador único de la guía. *Generado por el sistema.* | **Sí** |
| **`cliente`** | `STRING` | **Nombre del cliente** o razón social a donde se dirige la mercancía. (Paso 1) | **Sí** |
| **`destino`** | `STRING` | **Dirección completa** del punto de entrega. (Paso 1) | **Sí** |
| **`estado`** | `String` | Indica el estado del envío, los únicos valores que puede tener es: **en tránsito**, **entregado** o **pendiente** | **Sí** |
| **`transportista`** | `STRING` | **Nombre de la empresa** o persona encargada del transporte. (Paso 1) | **Sí** |
| **`productos`** | `ARRAY` | Lista de **ítems** que componen la carga. Ver esquema anidado. | **Sí** |
| **`fecha_creacion`** | `DATETIME` | Marca de tiempo de cuándo fue creada la guía. | **Sí** |

---

## 🗃️ Esquema Anidado: `ProductoRemision`

Este objeto se utiliza dentro del array `productos` del esquema principal.

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| **`sku`** | `STRING` | **Código SKU** (Stock Keeping Unit) único del producto. (Paso 2) | **Sí** |
| **`cantidad`** | `INTEGER` | **Número de unidades** de este producto a transportar. (Paso 2) | **Sí** |

---

## 💡 Ejemplo de Estructura JSON (Creación)

Este es un ejemplo de la carga útil (payload) que se enviaría al endpoint de creación (`POST`).

```json
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
}
```