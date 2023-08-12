import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Pessoa{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    pessoa_tipo_id: number;

    @Column("varchar", {length: 200})
    nome: string;

    @Column({type: "date"})
    data_nascimento: Date;

    @Column()
    sexo: boolean;

    @Column()
    nif: boolean;

    @Column()
    nbi: boolean;

    @Column()
    estado_civil: boolean;

    @Column()
    sexo: boolean;
}