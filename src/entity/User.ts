import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Address } from "./Address";
import { Product } from "./product";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: number;

    @OneToMany(() => Address, (address: Address) => address.user)
    address: Address[];

    @ManyToMany(() => Product, (product : Product) => product.user)
    product : Product;

}
