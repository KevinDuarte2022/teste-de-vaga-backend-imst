import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Apartamento } from './Apartamento';

@Entity()
export class Veiculo {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Apartamento, apartamento => apartamento.veiculos)
    id_apartamento!: Apartamento;

    @Column()
    marca!: string;

    @Column()
    modelo!: string;

    @Column()
    cor!: string;

    @Column()
    placa!: string;
}
