"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const Apartamento_1 = require("./models/Apartamento");
const Veiculo_1 = require("./models/Veiculo");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// Configuração da conexão com o banco de dados
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "avivamento23",
    database: "postgres",
    entities: [Apartamento_1.Apartamento, Veiculo_1.Veiculo],
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
