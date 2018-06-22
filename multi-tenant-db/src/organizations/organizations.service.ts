import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from './organization.entity';
import { ObjectID, MongoRepository } from 'typeorm';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationsRepository: MongoRepository<Organization>,
  ) {}

  async create(org: Organization): Promise<Organization> {
    return await this.organizationsRepository.save<Organization>(org);
  }

  async getAll(): Promise<Organization[]> {
    return await this.organizationsRepository.find();
  }

  async getById(id: ObjectID): Promise<Organization> {
    return await this.organizationsRepository.findOne(id);
  }
}
