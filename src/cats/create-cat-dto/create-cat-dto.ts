export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;

  constructor(data: CreateCatDto) {
    this.name = data.name;
    this.age = data.age;
    this.breed = data.breed;
  }
}
