# API creada con NodeJS

La API fue desarrollada con NodeJS, utilizando el framework ExpressJS en el que nos permite desarrollar una API en el entorno de NodeJS de manera minimalista

# Iniciar API

Lo primero hay que instalar NodeJS y NPM, también puedes corrobar si es que lo tienes instalado en tu sistema operativo con los siguientes comandos:

```
node --version / node -v

npm --version / npm -v
```

Cuando ya tienes instalados los programas que se ha mencionado anteriormente, debes de instalar sus dependencias con el siguiente comando:

```
npm install / npm i
```

# Levantar servidor de la API

La API tiene su propio servidor en cual puede ser levantado y a su vez permite visualizarse en el navegador, su puerto por defecto es el 3001, pero se puede cambiar el puerto que tu quieres.

Para levantarlo debes de colocar en tu terminal el siguiente comando:

```
npm start
```

Una vez utilizado el comando, te debe aparecer el siguiente mensaje: "el servidor se ha levantado en el puerto 3001", si es así, debes de dirigirte a tu navegador y en la URL poner lo siguiente:

```
localhost:3001
```
En el puerto 3001 te debe aparecer un mensaje que dice "Hola mundo", nuevamente en la URL debes de colocar lo siguiente:

```
localhost:3001/api/notas
```
Se te mostrara unos objetos tipo JSON que están predeterminados a nivel de código
