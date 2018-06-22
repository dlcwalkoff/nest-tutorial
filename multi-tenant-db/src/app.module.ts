import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    OrganizationsModule,
  ],
})
export class AppModule {}
