import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Veiculo } from '../models/Veiculo';
import { Apartamento } from '../models/Apartamento';

const router = Router();

// Endpoint para criar um novo Veículo
router.post('/', async (req: Request, res: Response) => {
    const { id_apartamento, marca, modelo, cor, placa } = req.body;

    if (!id_apartamento || !marca || !modelo || !cor || !placa) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const veiculoRepository = AppDataSource.getRepository(Veiculo);
    const apartamentoRepository = AppDataSource.getRepository(Apartamento);
    const apartamento = await apartamentoRepository.findOneBy({ id: id_apartamento });

    if (!apartamento) {
        return res.status(404).json({ message: 'Apartamento não encontrado' });
    }

    const novoVeiculo = veiculoRepository.create({
        id_apartamento: apartamento,
        marca,
        modelo,
        cor,
        placa,
    });

    try {
        await veiculoRepository.save(novoVeiculo);
        return res.status(201).json(novoVeiculo);
    } catch (error) {
        console.error('Erro ao salvar o Veículo:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao salvar o Veículo', error: (error as Error).message });
    }
});

// Endpoint para listar todos os Veículos
router.get('/', async (req: Request, res: Response) => {
    try {
        const veiculoRepository = AppDataSource.getRepository(Veiculo);
        const veiculos = await veiculoRepository.find();
        return res.status(200).json(veiculos);
    } catch (error) {
        console.error('Erro ao listar Veículos:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao listar Veículos', error: (error as Error).message });
    }
});

// Endpoint para buscar um Veículo pelo ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const veiculoRepository = AppDataSource.getRepository(Veiculo);
        const veiculo = await veiculoRepository.findOneBy({ id: parseInt(id) });

        if (!veiculo) {
            return res.status(404).json({ message: 'Veículo não encontrado' });
        }

        return res.status(200).json(veiculo);
    } catch (error) {
        console.error('Erro ao buscar Veículo:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao buscar Veículo', error: (error as Error).message });
    }
});

// Endpoint para atualizar um Veículo
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { id_apartamento, marca, modelo, cor, placa } = req.body;

    if (!id_apartamento || !marca || !modelo || !cor || !placa) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const veiculoRepository = AppDataSource.getRepository(Veiculo);
        const veiculoToUpdate = await veiculoRepository.findOneBy({ id: parseInt(id) });

        if (!veiculoToUpdate) {
            return res.status(404).json({ message: 'Veículo não encontrado' });
        }

        const apartamentoRepository = AppDataSource.getRepository(Apartamento);
        const apartamento = await apartamentoRepository.findOneBy({ id: id_apartamento });

        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento não encontrado' });
        }

        veiculoToUpdate.id_apartamento = apartamento;
        veiculoToUpdate.marca = marca;
        veiculoToUpdate.modelo = modelo;
        veiculoToUpdate.cor = cor;
        veiculoToUpdate.placa = placa;

        await veiculoRepository.save(veiculoToUpdate);
        return res.status(200).json(veiculoToUpdate);
    } catch (error) {
        console.error('Erro ao atualizar Veículo:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao atualizar Veículo', error: (error as Error).message });
    }
});

// Endpoint para deletar um Veículo
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const veiculoRepository = AppDataSource.getRepository(Veiculo);
        const veiculoToDelete = await veiculoRepository.findOneBy({ id: parseInt(id) });

        if (!veiculoToDelete) {
            return res.status(404).json({ message: 'Veículo não encontrado' });
        }

        await veiculoRepository.remove(veiculoToDelete);
        return res.status(200).json({ message: 'Veículo deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar Veículo:', (error as Error).message);
        return res.status(500).json({ message: 'Erro ao deletar Veículo', error: (error as Error).message });
    }
});

export default router;
