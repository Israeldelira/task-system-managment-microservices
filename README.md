# Configuración de Microservicios

Este documento detalla la configuración necesaria para los microservicios de usuarios y tareas en el sistema.
Completar las siguientes variables de entorno en el archivo .env a nivel raiz:

```env
USER_DB_HOST=          # Dirección del host de la base de datos de usuarios
USER_DB_PORT=          # Puerto de la base de datos de usuarios
USER_DB_USERNAME=      # Nombre de usuario para la base de datos de usuarios
USER_DB_PASSWORD=      # Contraseña para la base de datos de usuarios
USER_DB_NAME=          # Nombre de la base de datos de usuarios
USER_SERVICE_PORT=     # Puerto en el que corre el microservicio de usuarios

# Configuración de la base de datos para el microservicio de tareas

TASK_DB_HOST=          # Dirección del host de la base de datos de tareas
TASK_DB_PORT=          # Puerto de la base de datos de tareas
TASK_DB_USERNAME=      # Nombre de usuario para la base de datos de tareas
TASK_DB_PASSWORD=      # Contraseña para la base de datos de tareas
TASK_DB_NAME=          # Nombre de la base de datos de tareas
TASK_SERVICE_PORT=     # Puerto en el que corre el microservicio de tareas

# Otras configuraciones
NODE_ENV=              # Entorno de ejecución (ej. desarrollo, producción)
PORT_GETWAY=           # Puerto del gateway de servicios
