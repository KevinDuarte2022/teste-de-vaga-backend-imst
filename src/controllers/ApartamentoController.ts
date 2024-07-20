import { Request, Response } from 'express';
import { AppDataSource } from '../data-source'; // Importei o DataSource
import { Apartamento } from '../models/Apartamento';

class ApartamentoController {
    async create(req: Request, res: Response): Promise<Response> {
        const repository = AppDataSource.getRepository(Apartamento);
        const apartamento = repository.create(req.body);
        await repository.save(apartamento);
        return res.status(201).json(apartamento);
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const repository = AppDataSource.getRepository(Apartamento);
        const apartamentos = await repository.find();
        return res.json(apartamentos);
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Apartamento);
        const apartamento = await repository.findOne({ where: { id: Number(id) } });
        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }
        return res.json(apartamento);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Apartamento);
        const apartamento = await repository.findOne({ where: { id: Number(id) } });
        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }
        repository.merge(apartamento, req.body);
        const results = await repository.save(apartamento);
        return res.json(results);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const repository = AppDataSource.getRepository(Apartamento);
        const results = await repository.delete(id);
        return res.status(204).json(results);
    }
}

export default new ApartamentoController();
