import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly service: CatsService,
  ) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() newCat: ICat) {
    this.service.create(newCat);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} cat`;
  }
}
