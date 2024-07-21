import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Apartamento } from '../models/Apartamento';

const router = Router();

// Endpoint para criar um novo Apartamento
router.post('/', async (req: Request, res: Response) => {
    const { bloco, apartamento, morador, telefone, email } = req.body;

    if (!bloco || !apartamento || !morador || !telefone || !email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const apartamentoRepository = AppDataSource.getRepository(Apartamento);
    const novoApartamento = apartamentoRepository.create({
        bloco,
        apartamento,
        morador,
        telefone,
        email,
    });

    try {
        await apartamentoRepository.save(novoApartamento);
        return res.status(201).json(novoApartamento);
    } catch (error) {
        console.error('Erro ao salvar o Apartamento:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao salvar o Apartamento', error: (error as Error).message });
    }
});

// Endpoint para listar todos os Apartamentos
router.get('/', async (req: Request, res: Response) => {
    try {
        const apartamentoRepository = AppDataSource.getRepository(Apartamento);
        const apartamentos = await apartamentoRepository.find();
        return res.status(200).json(apartamentos);
    } catch (error) {
        console.error('Erro ao listar Apartamentos:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao listar Apartamentos', error: (error as Error).message });
    }
});

// Endpoint para buscar um Apartamento pelo ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const apartamentoRepository = AppDataSource.getRepository(Apartamento);
        const apartamento = await apartamentoRepository.findOneBy({ id: parseInt(id) });

        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }

        return res.status(200).json(apartamento);
    } catch (error) {
        console.error('Erro ao buscar Apartamento:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao buscar Apartamento', error: (error as Error).message });
    }
});

// Endpoint para atualizar um Apartamento
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { bloco, apartamento, morador, telefone, email } = req.body;

    if (!bloco || !apartamento || !morador || !telefone || !email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const apartamentoRepository = AppDataSource.getRepository(Apartamento);
        const apartamentoToUpdate = await apartamentoRepository.findOneBy({ id: parseInt(id) });

        if (!apartamentoToUpdate) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }

        apartamentoToUpdate.bloco = bloco;
        apartamentoToUpdate.apartamento = apartamento;
        apartamentoToUpdate.morador = morador;
        apartamentoToUpdate.telefone = telefone;
        apartamentoToUpdate.email = email;

        await apartamentoRepository.save(apartamentoToUpdate);
        return res.status(200).json(apartamentoToUpdate);
    } catch (error) {
        console.error('Erro ao atualizar Apartamento:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao atualizar Apartamento', error: (error as Error).message });
    }
});

// Endpoint para deletar um Apartamento
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const apartamentoRepository = AppDataSource.getRepository(Apartamento);
        const apartamentoToDelete = await apartamentoRepository.findOneBy({ id: parseInt(id) });

        if (!apartamentoToDelete) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }

        await apartamentoRepository.remove(apartamentoToDelete);
        return res.status(200).json({ message: 'Apartamento deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar Apartamento:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao deletar Apartamento', error: (error as Error).message });
    }
});

export default router;
