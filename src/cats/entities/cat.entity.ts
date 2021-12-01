import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Accessory } from './accessory.entity';
@Entity() // sql table === 'cat'
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @JoinTable()
  @ManyToMany((type) => Accessory, (accessory) => accessory.cats)
  accessories: string[];
}
