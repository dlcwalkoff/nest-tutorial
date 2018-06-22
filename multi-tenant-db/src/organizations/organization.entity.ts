import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Organizations {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
}
