import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat-dto/create-cat-dto';

@Injectable()
export class CatsService {
  async create(data: CreateCatDto) {
    return new CreateCatDto(data);
  }
}
