import {
	Column,
	PrimaryGeneratedColumn,
	Entity,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity()
export class ShopCart {
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

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date


    @Column()
    image:string;

    @Column({default:0})
    in_stock:number;

    @Column({default:0})
    count:number;

    @Column({default:0})
    total_price:number;

    @Column()
    userId:number;

    @Column()
    partId:number;
}