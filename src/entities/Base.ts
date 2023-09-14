import {
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Base extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: number;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: number;

  @Field()
  deletedAt: number;
}
