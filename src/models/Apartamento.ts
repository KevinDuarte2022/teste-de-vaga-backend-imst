import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Apartamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bloco: number;

    @Column()
    apartamento: number;

    @Column()
    morador: string;

    @Column()
    telefone: string;

    @Column({ nullable: true })
    email: string;

    constructor() {
        this.id = 0; // Ou outra lógica de inicialização adequada
        this.bloco = 0;
        this.apartamento = 0;
        this.morador = '';
        this.telefone = '';
        this.email = '';
    }
}
