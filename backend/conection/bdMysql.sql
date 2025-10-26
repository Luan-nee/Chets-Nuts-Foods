

create table tipo_usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

create table usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_tipo INT NOT NULL,
    nombre VARCHAR(240) NOT NULL,
    apellido VARCHAR(240) NOT NULL,
    dni VARCHAR(10) NOT NULL,
    telefono1 VARCHAR(20) NOT NULL,
    telefono2 VARCHAR(20) NOT NULL ,
    correo VARCHAR(200) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_nac DATE NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

create table sessiones(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    secreto VARCHAR(300) NOT NULL,
    refreshToken VARCHAR(300) NOT NULL,
    tokenGoogle VARCHAR(300) NOT NULL,
    refreshTokenGoogle VARCHAR(300) NOT NULL,
    fechaSecion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE socketsConnect(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idSesion INT NOT NULL,
    clave VARCHAR(200) NOT NULL,
)

CREATE TABLE cursos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(200) NOT NULL
)

CREATE TABLE tablaDocentes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    calificacion INT NOT NULL,
    estadoDocente VARCHAR(100) NOT NULL
)

CREATE TABLE especiabilidadDocente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idDocente INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    nivel VARCHAR(100) NOT NULL
)

CREATE TABLE asignaturas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idCurso INT NOT NULL,
    idDocente INT NOT NULL,
    h_inicio TIME NOT NULL,
    h_final TIME NOT NULL
)

CREATE TABLE periodos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_final DATE NOT NULL 
)

CREATE TABLE matricula(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idAsignatura INT NOT NULL,
    idPeriodo INT NOT NULL,
    fechaMatricula TIMESTAMP NOT NULL CURRENT_TIMESTAMP
)

CREATE TABLE asistencia(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idMatricula INT NOT NULL,
    fecha DATE NOT NULL,
    ciclo INT NOT NULL
)

CREATE TABLE tablaNotas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idMatricula INT NOT NULL,
    nota1 FLOAT NOT NULL,
    nota2 FLOAT NOT NULL,
    nota3 FLOAT NOT NULL
)

CREATE TABLE permisos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(145) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL CURRENT_TIMESTAMP
)

CREATE TABLE tablaPermisos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idPermiso INT NOT NULL,
    idUsuario INT NOT NULL
)


