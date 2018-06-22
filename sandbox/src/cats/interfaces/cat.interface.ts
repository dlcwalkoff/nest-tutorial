import { object, string, number } from 'joi';

export interface ICat {
  name: string;
  age: number;
  breed: string;
}

export const CatSchema = object().keys({
  name: string().required(),
  age: number().required(),
  breed: string().required(),
});
