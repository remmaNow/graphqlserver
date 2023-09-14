import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Base } from './Base';

@ObjectType()
@Entity('companies')
export class Company extends Base {
  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('text')
  logo: string;

  @Field()
  @Column('text')
  contactName: string;

  @Field()
  @Column('text')
  contactPhone: string;

  @Field()
  @Column('text')
  contactEmail: string;

  @Field()
  @Column('text')
  country: string;
}
