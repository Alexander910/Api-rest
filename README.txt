PRÁCTICA API

1. Abre index.js y sustituye Nombre Apellido y 12345 por tus datos.
2. En esta carpeta ejecuta:
   npm ci
   npm start
3. Abre http://localhost:3000/test para consultar el JSON.

ARCHIVOS
index.js: crea Express, habilita CORS y responde a GET /test.
package.json: declara las dependencias y el comando npm start.
package-lock.json: fija las versiones de las dependencias instaladas.
.gitignore: evita subir node_modules y variables de entorno a GitHub.

DESPLIEGUE
Sube el contenido de esta carpeta a su propio repositorio practica-api.
En Render crea un Web Service conectado al repositorio:
  Runtime: Node
  Branch: main
  Build Command: npm install
  Start Command: npm start
Elige el plan indicado por tu docente si está disponible en tu cuenta.
Prueba https://TU-SERVICIO.onrender.com/test.

El puerto se toma de process.env.PORT; en local se usa 3000.
El timestamp se genera en cada petición.
