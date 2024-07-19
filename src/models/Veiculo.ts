import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Apartamento } from './Apartamento';

@Entity()
export class Veiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Apartamento, apartamento => apartamento.id)
    id_apartamento: Apartamento;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    cor: string;

    @Column()
    placa: string;

    constructor() {
        this.id = 0; // Ou outra lógica de inicialização adequada
        this.id_apartamento = new Apartamento();
        this.marca = '';
        this.modelo = '';
        this.cor = '';
        this.placa = '';
    }
}
