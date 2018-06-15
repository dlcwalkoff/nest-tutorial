import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  @Post()
  create() {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} cat`;
  }
}
