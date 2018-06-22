import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Organization {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('text')
  name: string;
}
