import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Address } from "./address";
import { ProductDetail } from "./productDetail";

@Entity()
export class Seller {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    sellerName: string;

    @Column()
    email: string;

    @Column()
    sellerAddress: Address;

    @OneToMany(() => Address, (address: Address) => address.seller)
    address: Address[];

    @OneToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.seller)
    productDetail: ProductDetail[];

}

    