# =========================
# BUILD DO FRONTEND
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm install

# Copia o código
COPY . .

# Build de produção (Vite)
RUN npm run build


# =========================
# SERVE COM NGINX
# =========================
FROM nginx:alpine

# Remove config padrão
RUN rm /etc/nginx/conf.d/default.conf

# Configuração customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build final
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
