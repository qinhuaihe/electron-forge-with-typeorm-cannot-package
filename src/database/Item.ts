import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  price: number;

  @Column({ nullable: true })
  sequence: string;

  @Column()
  status: string;
}
