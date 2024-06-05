# Usar una imagen base de nginx
FROM nginx:alpine

# Copiar los archivos estáticos al directorio adecuado
COPY src /usr/share/nginx/html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

# El servidor nginx se inicia automáticamente al ejecutar el contenedor