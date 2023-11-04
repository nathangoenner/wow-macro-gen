FROM nginx:latest

COPY ./macro-gen.html /usr/share/nginx/html/index.html
COPY ./macro-generator.js /usr/share/nginx/html/macro-generator.js
COPY ./style.css /usr/share/nginx/html/style.css


