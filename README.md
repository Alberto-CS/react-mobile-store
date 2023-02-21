# React Mobile Store


## Acceso al código y despliegue a la aplicación

La aplicación se encuentra disponible en Github, donde se puede consultar el código en el siguiente enlace:

[react-mobile-store - Github](https://github.com/Alberto-CS/react-mobile-store)
 

Para arrancar la aplicación debemos clonar o descargar el repositorio y ejecutar los siguientes comandos

> npm install

> npm start

Se abrirá la aplicación en el navegador predeterminado. 

Para mayor comodidad, en el caso de que se quiera probar sin instalar se ha subido a Vercel. Se puede acceder a través del siguiente enlace.

[react-mobile-store - Vercel](https://github.com/Alberto-CS/react-mobile-store)


## Estructura y organización de la app
Se ha utilizado el comando create-react-app con la plantilla de redux para estructurar la aplicación. Se ha respetado la estructura generada añadiendo al directorio 'app' aquellos componentes generales que no forman parte de alguna característica en concreto tal como las traducciones o la página 404. 

Aquellos componentes que involucran funcionalidades o características requisitos de la aplicación se encuentran en el directorio 'features'.

## Descripción de la aplicación

### App
En este componente está desarrollado el routing de la aplicación y la gestión del estado de la API de la que se obtiene la primera carga de datos de la aplicación.

##### Routing
En el caso del routing se han diseñado las siguientes rutas:

- **exact path='/'** Pantalla principal, listado de todos los móviles
- **path='/product/:id/*'** Gestión de errores en el caso de que se introduzca una ruta errónea
- **path='/product/:id'** Pantalla de detalles de un móvil en concreto
- **path='*'** Gestión de errores en el caso de que ninguna de las rutas anteriores coincida, página 404.

##### Gestión de estado de la API
Si la API está cargando, mostrará un spinner hasta que los datos estén cargados. En el caso de que haya algún error, se mostrará un texto de error en el idioma seleccionado en la aplicación.

### Product Card
Este es uno de los dos componentes básicos de la aplicación. Refleja la información mínima para identificar un móvil: imagen, marca, modelo y precio. En el caso de que se haga click en dicho componente, se accederá a la pantalla de detalles del personaje.

### Product List
Este componente muestra todo los móviles de la API con su información mínima, la barra de navegación y el buscador. La barra de navegación dispone del carrito de la aplicación. Tanto el carrito como el buscador disponen de un slice (shoppingCartSlice y searchBarSlice respectivamente) que facilitan el manejo de la lógica de los componentes y la limpieza y modularidad del código.

Debido a que no se ha proporcionado el endpoint para hacer post del carrito, que se ha pedido en varias ocasiones, se ha implementado el carrito de manera local y se mantiene el número de productos en la store.

### Product Details
Este es el segundo componente básico de la aplicación. Refleja mucha más información acerca de un móvil en concreto. Además dispone de diferentes selectores que permiten elegir entre diferentes características del producto.


### productsAPI
Este servicio hace uso de rtk query y permite la búsqueda y el cacheo de datos de la aplicación. Se han planteado dos hooks para poder acceder a los distintos datos: uno para obtener todos los móviles y otro para acceder a los destalles de un móvil en concreto.


## Librerías usadas
Se ha procurado usar el menor número de librerías posibles sin comprometer la calidad del código y del resultado de la aplicación. Las librerías más importantes a comentar son las siguientes

### React Helmet
React Helmet permite cambiar dinámicamente las cabeceras del fichero html generado para producción. Esto es especialmente útil cuando la aplicación se despliega en un entorno web, donde podemos fijar parámetros como el título, la descripción o el favicon de la web. En este caso concreto se ha utilizado para modificar el title de la app.

### RTK Query
RTK Query permite simplificar el proceso de búsqueda y cacheo de datos. 

### MUI v5
Se ha utilizado el ecosistema de Material UI para desarrollar las cuestiones de estilo de la aplicación. Internamente hace uso de las librerías de @emotion.

### i18n
i18n permite internacionalizar una app. Se ha utilizado i18n para cambiar entre los idiomas de inglés y español de la aplicación.
