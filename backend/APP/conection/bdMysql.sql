-- ==========================================================
--   BASE DE DATOS: chets_nuts_foods
--   Autor: Zain Viamonte (Arquitecto de lo Imposible)
--   Descripción: Gestión de productos, compras y guías
-- ==========================================================

CREATE DATABASE IF NOT EXISTS chets_nuts_foods;
USE chets_nuts_foods;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contra VARCHAR(255) NOT NULL,
    refreshToken VARCHAR(255),
    rol ENUM('admin', 'operario', 'transportista') DEFAULT 'operario',
    estado ENUM('activo', 'inactivo') DEFAULT 'activo'
);

CREATE TABLE Proveedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    RUC VARCHAR(20),
    confianza INT(10),
    direccion VARCHAR(150),
    contacto VARCHAR(50)
);

CREATE TABLE producto (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    precioVenta FLOAT(10,2) NOT NULL DEFAULT 0,
    stock INT DEFAULT 0,
    pesoKG FLOAT(10,2) NOT NULL DEFAULT 0,
    codigoProducto VARCHAR(50),
    fechaRegistro DATE DEFAULT (CURRENT_DATE),
    fechaVenc DATE,
    factura BOOL DEFAULT FALSE
);

CREATE TABLE sucursal_compras (
    idCompra INT AUTO_INCREMENT PRIMARY KEY,
    idProveedor INT NOT NULL,
    cantidadTotal INT DEFAULT 0,
    precioTotal FLOAT(10,2) DEFAULT 0,
    fechaEntrada DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE detalle_compra (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idCompra INT NOT NULL,
    idProducto INT NOT NULL,
    cantidad INT DEFAULT 0,
    precioCompra FLOAT(10,2) DEFAULT 0
);

CREATE TABLE transportista (
    idTransportista INT AUTO_INCREMENT PRIMARY KEY,
    modalidad ENUM('privada','publica'),
    dni VARCHAR(15),
    licenciaConductor VARCHAR(50),
    placa VARCHAR(15),
    marcaVehiculo VARCHAR(50),
    telefono VARCHAR(20)
);

CREATE TABLE guia_remision (
    idRemision INT AUTO_INCREMENT PRIMARY KEY,
    fechaEmision DATE DEFAULT (CURRENT_DATE),
    fechaInicioTraslado DATE,
    motivoTraslado VARCHAR(150),
    pesoTotalKg FLOAT(10,2),
    estado ENUM('pendiente','en tránsito','entregado','anulado') DEFAULT 'pendiente',
    dirSalida VARCHAR(200),
    dirLlegada VARCHAR(200),
    idTransportista INT NOT NULL,
    idUsuario INT,
    idDestinatario INT
);

CREATE TABLE detalle_productos (
    idDetalleProd INT AUTO_INCREMENT PRIMARY KEY,
    idRemision INT NOT NULL,
    idProducto INT NOT NULL,
    cantidadProductos INT DEFAULT 0
);

CREATE INDEX idx_compra_comerciante ON sucursal_compras(idComerciante);
CREATE INDEX idx_detallecompra_producto ON detalle_compra(idProducto);
CREATE INDEX idx_detalleguia_producto ON detalle_productos(idProducto);
CREATE INDEX idx_remision_transportista ON guia_remision(idTransportista);


CREATE OR REPLACE VIEW vista_resumen_compras AS
SELECT 
    c.idCompra,
    cm.nombre AS comerciante,
    c.cantidadTotal,
    c.precioTotal,
    c.fechaEntrada
FROM sucursal_compras c
LEFT JOIN comerciante cm ON cm.idComerciante = c.idComerciante;

CREATE OR REPLACE VIEW vista_productos_remision AS
SELECT 
    g.idRemision,
    g.fechaEmision,
    g.estado,
    p.nombre AS producto,
    d.cantidadProductos,
    t.placa AS transporte
FROM guia_remision g
LEFT JOIN detalle_productos d ON g.idRemision = d.idRemision
LEFT JOIN producto p ON p.idProducto = d.idProducto
LEFT JOIN transportista t ON t.idTransportista = g.idTransportista;

