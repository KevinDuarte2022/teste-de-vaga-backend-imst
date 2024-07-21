import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors'; // Para lidar com erros assíncronos
import { AppDataSource } from './data-source';
import apartamentosRouter from './routes/apartamento.routes'; 
import veiculosRouter from './routes/veiculos.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Inicializar o DataSource
AppDataSource.initialize()
    .then(() => {
        console.log('DataSource conectado com sucesso');
    })
    .catch(error => {
        console.error('Erro ao conectar com o DataSource', error);
    });

// Usando os roteadores
app.use('/apartamentos', apartamentosRouter);
app.use('/veiculos', veiculosRouter);

// Middleware para lidar com erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
