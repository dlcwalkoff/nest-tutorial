import { ICat } from '../interfaces/cat.interface';

export class CatDTO implements ICat {
  readonly name: string;
  readonly age: number;
  readonly breed: string;

  constructor(data: CatDTO) {
    this.name = data.name;
    this.age = data.age;
    this.breed = data.breed;
  }
}
