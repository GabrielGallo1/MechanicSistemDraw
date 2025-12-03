🌐 MechanicSystem – Backend & Database

Projeto composto por dois módulos independentes:

Database (PostgreSQL) com scripts automáticos.

Backend (Node.js + Express + TypeScript + Prisma) conectado ao banco via Docker Network.

🗺️ Fluxograma do Projeto

👉 https://app.diagrams.net/#HGabrielGallo1%2FMechanicSistemDraw%2Fmain%2FDiagrama%20sem%20nome.drawio#%7B%22pageId%22%3A%22uTZNbj9q_4ASz6jmLrzH%22%7D

🛠️ Usando a Aplicação

A aplicação é dividida em dois serviços separados, cada um com seu próprio docker-compose.yml:

/database → banco PostgreSQL

/backend → API REST com Node.js

Para que ambos funcionem, precisam estar na mesma Docker Network.

🔌 1. Criar a Docker Network (Obrigatório)

Antes de subir qualquer container:

docker network create mechanic_network


Essa rede permite que o backend enxergue o banco mesmo estando em compose separados.

🛢️ 2. Subindo o Database

📍 Local: database/docker-compose.yml

Subir o container do PostgreSQL:
cd database
docker compose up -d

O que acontece automaticamente:

Criação do schema vehicles

Criação das tabelas client, mechanic, vehicles.car, vehicles.truck, workOrders

Inserção dos dados iniciais (seeds)

Extensão pgcrypto habilitada

Nome do serviço usado pelo backend:
mechanic_system_db

💻 3. Subindo o Backend

📍 Local: backend/docker-compose.yml

Antes de subir:

Confirme se a DATABASE_URL está usando o nome do serviço do banco:

DATABASE_URL=postgresql://postgres:1234@mechanic_system_db:5432/mechanicsystem

Subir o backend:
cd backend
docker compose up -d


A API estará disponível em:

http://localhost:3333

🔗 Conexão entre Backend e Database

Os dois compose funcionam separados, mas se conectam porque:

Ambos usam a mesma Docker Network:

mechanic_network


O backend se conecta ao banco pelo nome do container do DB:

mechanic_system_db

🧪 Testando no Postman
Clients
GET  /client
POST /client

Mechanics
GET  /mechanic
POST /mechanic
PUT  /mechanic/:id
DELETE /mechanic/:id

Vehicles
GET  /vehicles/car
GET  /vehicles/truck

Work Orders
GET  /workorders
POST /workorders

