#!/bin/sh
# Genera config.js con la URL de la API a partir de la variable de entorno API_URL.
# Vacío = mismo origen (nginx hace proxy de /api al backend).
cat > /usr/share/nginx/html/assets/js/config.js <<JS
const API_URL = '${API_URL%/}';
const API_BASE = API_URL + '/api';
const SERVER_BASE = API_URL;
JS
