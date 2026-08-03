# Cloudflare Worker — Chat Proxy para NVIDIA API

## Pasos para desplegar

### 1. Instalar Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Login en Cloudflare
```bash
wrangler login
```

### 3. Navegar a la carpeta del worker
```bash
cd workers/chat-proxy
```

### 4. Configurar la API Key como secret
```bash
wrangler secret put NVIDIA_API_KEY
# Pegar tu API key cuando te lo pida: nvapi-YKBRSIbw-...
```

### 5. Desplegar
```bash
wrangler deploy
```

### 6. Copiar la URL del Worker
Te mostrará algo como:
```
https://logia-chat-proxy.tu-usuario.workers.dev
```

### 7. Actualizar el frontend
En `src/services/nvidiaApi.js`, reemplaza la URL del Worker:
```javascript
const PROXY_URL = import.meta.env.PROD 
  ? 'https://logia-chat-proxy.TU-USUARIO.workers.dev/api/chat'  // ← TU URL AQUÍ
  : 'http://localhost:3001/api/chat';
```

### 8. Rebuild y deploy
```bash
bun run build
# Subir dist/ a Render
```

## Verificar que funciona
```bash
curl -X POST https://logia-chat-proxy.TU-USUARIO.workers.dev/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hola"}]}'
```
