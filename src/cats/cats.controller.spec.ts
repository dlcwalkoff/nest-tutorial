import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat-dto/create-cat-dto';

describe('Cats Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();
  });

  it('should be defined', () => {
    const controller: CatsController = module.get<CatsController>(CatsController);
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return "This action returns all cats"', () => {
      const appController = module.get<CatsController>(CatsController);
      expect(appController.findAll()).toBe('This action returns all cats');
    });
  });

  describe('create', () => {
    it('should return "This action adds a new cat"', () => {
      const appController = module.get<CatsController>(CatsController);
      const data: CreateCatDto = {
        name: 'Test',
        age: 3,
        breed: 'aby',
      };

      expect(appController.create(data)).resolves.toBe(new CreateCatDto(data));
    });
  });

  describe('create', () => {
    it('should return "This action adds a new cat"', () => {
      const appController = module.get<CatsController>(CatsController);
      const id = 123;

      expect(appController.findOne(123)).toBe(`This action returns a #${id} cat`);
    });
  });
});
