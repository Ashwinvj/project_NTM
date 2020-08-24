import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./User";
import { ProductDetail } from "./productDetail";

@Entity()
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id : number;

    @Column()
    productId : number;

    @Column()
    productCount : number;

    @Column()
    totalRate : number;

    @ManyToMany(() => User, (user :User) => user.product)
    user: User;

    @ManyToMany(() => ProductDetail, (productDetail :ProductDetail) => productDetail.product)
    productDetail: ProductDetail;


}