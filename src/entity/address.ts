import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { User } from "./User";
import { Seller } from "./seller"

@Entity()
export class Address {

  @PrimaryGeneratedColumn('uuid')
  id: string;
 
  @Column()
  street: string;
 
  @Column()
  door: string;
  
  @Column()
  city : string;

  @Column()
  pinCode : number;

  @ManyToOne(() => User, (user: User) => user.address,{
  onDelete: "CASCADE"})
  user: User;

  @ManyToOne(() => Seller, (seller: Seller) => seller.address,{
  onDelete: "CASCADE"})
  seller: Seller;
}
