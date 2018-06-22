import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organizations } from './organization.entity';
import { ObjectID, MongoRepository } from 'typeorm';
import { OrganizationDto } from './organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organizations)
    private readonly organizationsRepository: MongoRepository<Organizations>,
  ) {}

  create(org: OrganizationDto) {
    console.log('Create: ', org);
    return this.organizationsRepository.create(org);
  }

  async getAll(): Promise<Organizations[]> {
    console.log('Get all');
    return await this.organizationsRepository.find();
  }

  async getById(id: ObjectID) {
    console.log(`Get ${id} organization`);
    return await this.organizationsRepository.findOne(id);
  }
}
