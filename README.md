# CRUD-tasks-backend

Este proyecto se utiliza para la gestión de tareas, utilizando  Node.js, Express y MySQL. Proporciona operaciones CRUD básicas para la administración de tareas.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para construir aplicaciones web en Node.js.
- **mysql2**: Driver nativo para interactuar con bases de datos MySQL.
- **express-validator**: Dependencia para las validaciones.

## Instalación

1. Clonar este repositorio:

    git clone https://github.com/Nazaaa7/crud-tasks-backend

2. Navega al directorio del proyecto:

    cd crud-tasks-backend

3. Instala las dependencias:

    npm install express  mysql2 

4. Crear y configurar la Base de datos en Mysql. Luego, asegurarse de conectar correctamente en el archivo de conexión. 

1. Crea una base de datos MySQL llamada `tasks_db`.

    ```sql
    CREATE DATABASE tasks_db;
    ```

2. Crea una tabla llamada `tasks` con las siguientes columnas:

    ```sql
    CREATE TABLE tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        isComplete BOOLEAN 
    );
    ```

## Rutas API

### POST /tasks

Añade una nueva tarea.

**Cuerpo de la solicitud:**
{
  "title": "Título de la tarea",
  "description": "Descripción de la tarea"
}

**Respuesta:**
- **Código de estado 201**: La tarea ha sido creada exitosamente.
- **Código de estado 400**: Error en la validación de los datos.

### GET /tasks

Obtiene todas las tareas.

### GET /

Obtiene una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a obtener.

**Respuesta:**
- **Código de estado 200**: Datos de la tarea solicitada.
- **Código de estado 404**: Tarea no encontrada.

### PUT /tasks/:id

Actualiza una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a actualizar.

**Cuerpo de la solicitud:**
{
  "title": "Nuevo título de la tarea",
  "description": "Nueva descripción de la tarea"
}

**Respuesta:**
- **Código de estado 200**: Tarea actualizada exitosamente.


### DELETE /tasks/:id

Elimina una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a eliminar.

**Respuesta:**
- **Código de estado 200**: Tarea eliminada exitosamente.

## Ejecución

Para iniciar el servidor, utiliza el siguiente comando:

    npm run dev

El servidor escuchará en el puerto especificado en la configuración.
