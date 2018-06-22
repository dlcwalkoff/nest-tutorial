import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationDto } from './organization.dto';
import { ObjectID } from 'typeorm';
import { Organization } from './organization.entity';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {

  constructor(
    private readonly service: OrganizationsService,
  ) {}

  @Post()
  async create(@Body() org: OrganizationDto) {
    return await this.service.create(org as Organization);
  }

  @Get()
  async getAll(): Promise<Organization[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.service.getById(new ObjectID(id));
  }
}
