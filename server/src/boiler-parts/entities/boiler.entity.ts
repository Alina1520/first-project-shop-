import {
	Column,
	PrimaryGeneratedColumn,
	Entity,CreateDateColumn,UpdateDateColumn
} from 'typeorm'

@Entity()
export class BoilerParts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    boiler_manufacturer:string;

    @Column({default:0})
    price: number;

    @Column()
    parts_manufacturer: string;
    
    @Column()
    vendor_code:string; 

    @Column()
    name:string; 
    
    @Column()
    description:string;

    @Column()
    images:string;

    @Column({default:0})
    in_stock:number;

    @Column({default:false})
    new:boolean;

    @Column({default:false})
    bestsellers:boolean;

    @Column()
    popularity:number;

    @Column()
    compatibility:string;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}