import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationDto } from './organization.dto';
import { ObjectID } from 'typeorm';
import { Organizations } from './organization.entity';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {

  constructor(
    private readonly service: OrganizationsService,
  ) {}

  @Post()
  create(@Body() org: OrganizationDto) {
    console.log('Create: ', org);
    return this.service.create(org);
  }

  @Get()
  async getAll(): Promise<Organizations[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log(`Get ${id} organization`);
    return await this.service.getById(new ObjectID(id));
  }
}
