import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      name: 'mongodb',
      port: 27017,
      host: 'localhost',
      database: 'nest-multi-tenant',
      entities: [__dirname + '/../**/*.entity.ts'],
      synchronize: true,
    }),
    OrganizationsModule,
  ],
})
export class AppModule {}
