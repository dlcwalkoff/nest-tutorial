import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatSchema, ICat } from './interfaces/cat.interface';
import { JoiValidatorPipe } from '../joi-validator/joi-validator.pipe';

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
  @UsePipes(new JoiValidatorPipe(CatSchema))
  create(@Body() newCat: ICat) {
    this.service.create(newCat);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} cat`;
  }
}
