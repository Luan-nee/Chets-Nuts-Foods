# 🌐 API reporte

Esta sección describe cómo interactuar con los endpoints de la API para realizar operaciones **CRUD** (**C**rear, **R**eer, **U**pdate, **D**elete).

---

## 🟢 Obtener / Consultar Datos (READ - GET)

Se utiliza para solicitar y obtener uno o varios productos del servidor. **No modifica** datos.

| Verbo HTTP | Endpoint       | Descripción                                    |
| :--------- | :------------- | :--------------------------------------------- |
| **`GET`**  | `/api/reporte` | Obtiene la **lista de datos** para el reporte. |

```json
{
    "Primedio_envios_dia": 230,
    "primedio_vendido_dia": 2040,
    "cant_guias_hoy": 34,
    "porcentaje_producto_categoria": [
        { "categoria": "Electronics", "porcentaje": 35 },
        { "categoria": "Hardware", "porcentaje": 25 },
        { "categoria": "Tools", "porcentaje": 20 },
        { "categoria": "Raw Materials", "porcentaje": 15 },
        { "categoria": "Other", "porcentaje": 5 },
        ],
    "movimiento_anual": [
        {
            "mes": "Enero",
            "entrada": 480,
            "salida": 390
        },
        {
            "mes": "Febrero",
            "entrada": 430,
            "salida": 405
        },
        {
            "mes": "Marzo",
            "entrada": 510,
            "salida": 460
        },
        {
            "mes": "Abril",
            "entrada": 550,
            "salida": 520
        },
        {
            "mes": "Mayo",
            "entrada": 490,
            "salida": 540
        },
        {
            "mes": "Junio",
            "entrada": 620,
            "salida": 580
        },
        {
            "mes": "Julio",
            "entrada": 580,
            "salida": 510
        },
        {
            "mes": "Agosto",
            "entrada": 540,
            "salida": 500
        },
        {
            "mes": "Septiembre",
            "entrada": 600,
            "salida": 570
        },
        {
            "mes": "Octubre",
            "entrada": 650,
            "salida": 610
        },
        {
            "mes": "Noviembre",
            "entrada": 700,
            "salida": 680
        },
        {
            "mes": "Diciembre",
            "entrada": 750,
            "salida": 720
        }
    ]
}
```