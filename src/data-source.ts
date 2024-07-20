import { DataSource } from 'typeorm';
import { Apartamento } from './models/Apartamento';
import { Veiculo } from './models/Veiculo';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Apartamento, Veiculo],
    synchronize: true,
});
