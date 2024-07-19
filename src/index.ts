import express from 'express';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Apartamento } from './models/Apartamento';
import { Veiculo } from './models/Veiculo';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuração da conexão com o banco de dados
const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Apartamento, Veiculo],
    synchronize: true,
});

// Conectar ao banco de dados
AppDataSource.initialize()
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados', error);
    });

// Rotas básicas
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
