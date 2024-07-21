import { DataSource } from 'typeorm';
import { Apartamento } from './models/Apartamento';
import { Veiculo } from './models/Veiculo';

export const AppDataSource = new DataSource({
    type: 'postgres',       
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "avivamento23",
    database: "postgres",
    entities: [Apartamento, Veiculo],
    synchronize: true,
});
