import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat-dto/create-cat-dto';

describe('CatsService', () => {
  let service: CatsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return correct new Cat', () => {
      const data: CreateCatDto = {
        name: 'Test',
        age: 3,
        breed: 'aby',
      };

      expect(service.create(data)).resolves.toBe(new CreateCatDto(data));
    });
  });
});
