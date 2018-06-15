import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('Cats Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CatsController],
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
      expect(appController.create()).toBe('This action adds a new cat');
    });
  });
});
