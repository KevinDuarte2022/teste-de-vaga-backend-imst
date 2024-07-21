import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Veiculo } from './Veiculo';

@Entity()
export class Apartamento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    bloco!: string;

    @Column()
    apartamento!: string;

    @Column()
    morador!: string;

    @Column()
    telefone!: string;

    @Column()
    email!: string;

    @OneToMany(() => Veiculo, veiculo => veiculo.id_apartamento)
    veiculos!: Veiculo[];
}
