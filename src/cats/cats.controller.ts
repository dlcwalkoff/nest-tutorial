import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat-dto/create-cat-dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private service: CatsService,
  ) {}

  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() newCat: CreateCatDto) {
    return await this.service.create(newCat);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} cat`;
  }
}
