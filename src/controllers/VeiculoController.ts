import { Request, Response } from 'express';
import { AppDataSource } from '../data-source'; // Importei o DataSource
import { Veiculo } from '../models/Veiculo';

class VeiculoController {
    async create(req: Request, res: Response): Promise<Response> {
        const repository = AppDataSource.getRepository(Veiculo);
        const veiculo = repository.create(req.body);
        await repository.save(veiculo);
        return res.status(201).json(veiculo);
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const repository = AppDataSource.getRepository(Veiculo);
        const veiculos = await repository.find();
        return res.json(veiculos);
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Veiculo);
        const veiculo = await repository.findOne({ where: { id: Number(id) } });
        if (!veiculo) {
            return res.status(404).json({ message: 'Veiculo não encontrado' });
        }
        return res.json(veiculo);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Veiculo);
        const veiculo = await repository.findOne({ where: { id: Number(id) } });
        if (!veiculo) {
            return res.status(404).json({ message: 'Veiculo não encontrado' });
        }
        repository.merge(veiculo, req.body);
        const results = await repository.save(veiculo);
        return res.json(results);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Veiculo);
        const results = await repository.delete(id);
        return res.status(204).json(results);
    }
}

export default new VeiculoController();
