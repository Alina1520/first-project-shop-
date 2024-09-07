import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'


export interface IUser{
    id: number,
    username:string,
    email:string,
    password:string
}


@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', nullable: false, unique: true })
    email: string

    @Column({ type: 'varchar', nullable: false, unique: true })
    username: string

    @Column({ type: 'varchar', nullable: false, unique: false })
    password: string

    @CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	createdAt: string

	@UpdateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	updatedAt: string


}