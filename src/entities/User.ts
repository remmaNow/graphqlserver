import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Base } from './Base';
import { Company } from './Company';

@ObjectType()
@Entity('users')
export class User extends Base {
  @Field()
  @OneToOne((/* type */) => Company)
  @JoinColumn()
  company: Company;

  @Field()
  @Column('text')
  firstName: string;

  @Field()
  @Column('text')
  lastName: string;

  @Field()
  @Column('text')
  username: string;

  @Field()
  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('int', { default: 0 })
  tokenVersion: number;
}
