import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './data-source'; // Importar o DataSource
import apartamentoRoutes from './routes/apartamento.routes';

dotenv.config();

console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Conectar ao banco de dados
AppDataSource.initialize()
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados', error);
    });

// Rotas
app.use('/api', apartamentoRoutes);

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
