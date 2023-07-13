# proyecto-citas-medicas
is a Node JS template struct.

## src

folder principal dle aplicativo el cual contiene la logica pertinente de los componentes y sus respectivos conexiones

En **src** tendremos una estructura compuesta por lo siguiente:

### api
Api contendra los componentes propios de aplicativo REST de Node y a su vez tendra la siguiente estructura

### Components
Se tiene el corazón de los componentes, como lo son las rutas, los controladores, modelos, repositorios , politicas y test.
Donde un componente tiene como objetivo representar un proceso importante dentro del desarrollo, como lo puede ser una entidad o casos de usos generales.

**services** que son los procsos locales que se encargan de la logica de comunicación o particularidades del proceso de comunicación con los entes externos. Normalmente son varios procesos como pordia sr conexión a una API externa, conexión a un servicio de nube, redis, kafka, etc.

**controller.js(ts)** es la clase que maneja los request entrantes, y envia la respuesta del back hacia el usuario final

**services.js(ts)** se encarga de toda la logica propia del componente.

**model.js(ts)** representa los modelos de la base de datos para el componente, donde se tiene la estructura de datos a usar por componente y es usado normalmente por el repositorio

**repository.js(ts)** es un interpretador para la base de datos y es lo que normalmente se importa como modulo para realizar los procesos de insercion, actualización, selección y borrado de datos sobre la base de datos, es aqui donde el ORM interactua. 

**routes.js(ts)** la redirección de los endpoints del componente, es el que asigna los metodos del controlador. (GET,POST,PUT,DELETE,PATCH).

**<component> spec.js(ts)** **opcional** archivo relacionado con los test.

**policy.js(ts)** **opcional** permite mejorar las reglas de acceso a las operaciones ¡Esta basado en roles!

### Middleware (**opcional**)

Carpeta que contiene todos los procesos de autenticación y validación, loggin o procesos de auditoria posterior a un request.

### routes.js
Es el que se encarga de registrar todas las rutas que pasan a través del middleware y de los componentes.

### server.js
Es donde se inicialzia el servicio y se configura absolutamente todo lo que requiere el servidor de express.
* Importación de middleware, componentes, rutas
* Manejo de errores
* Configuraciones de puertos  

### config
Es un directorio que contiene todos los procesos que se encargan de configurar la aplicación a nivel transversal.

* **variables globales** variables que son globales para toda la aplicación
* **logger** configuración propia o especifica de el logeo, como lo es la estructura del mensaje, que tipos de quiere, que nivel de alerta se propagra, etc.
* **ACL (Access Control List)** Lista de control de acceso.

### test

Son test que permiten correr los test de cada uno de los componentes.

### app.js

EN este archivo se realiza la inicialización del servicio.

### utils (opcional)

Tiene servicios generales que se pueden ser usados por los componentes o cualquier servicio dentro del aplicativo, es importante recalcar que son procesos muy generales y que no deben resolver particularidades del servicio.

## configuración proyecto

* El primer paso es crear el "package.json", a partir del comando **npm init**
    * **name**: nombre del proyecto
    * **version**: version del proyecto
    * **description**: Descripcion breve del proyecto
    * **entry point**: El archivo principal (main) del aplicativo
    * **test command**: si uno tiene test unitarios, aca se especifican el comando para ejecutarlos
    * **git repository**: la ruta del repositorio en el que se encuentra el codigo
    * **keywords**: palabras claves del proyecto
    * **author**: Autor y propietario del proyecto
    * **license**: Especifica una licencia sobre la que se quiere ditribuir el proyecto.

* Instalar typescript **npm install typescript**
* Instalar dependencias tales como:
   * express: **npm install express**
   * ts-node **npm install ts-node --save-dev** 
   * type/express **npm install @types/express**

* Crear un tscongif por defecto con el comando **npx tsc --init**, y luego activamos la opcion de **outDir** dentro del archivo y definimos la carpeta que contiene el archivo main (index.ts o app.ts)

