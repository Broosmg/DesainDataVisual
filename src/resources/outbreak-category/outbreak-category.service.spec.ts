import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakCategoryService } from './outbreak-category.service';

describe('OutbreakCategoryService', () => {
  let service: OutbreakCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakCategoryService],
    }).compile();

    service = module.get<OutbreakCategoryService>(OutbreakCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
