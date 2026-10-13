// Configuración central de la URL de la API.
// En Docker este archivo se regenera al arrancar a partir de la variable API_URL
// (ver docker-entrypoint.d/40-config.sh). Vacío = mismo origen (nginx hace proxy a /api).
// Para desarrollo sin Docker, cambia el valor a la URL de tu backend.
const API_URL = 'http://127.0.0.1:8000';
const API_BASE = API_URL + '/api';
const SERVER_BASE = API_URL;
