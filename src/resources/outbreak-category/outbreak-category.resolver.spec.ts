import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakCategoryResolver } from './outbreak-category.resolver';
import { OutbreakCategoryService } from './outbreak-category.service';

describe('OutbreakCategoryResolver', () => {
  let resolver: OutbreakCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakCategoryResolver, OutbreakCategoryService],
    }).compile();

    resolver = module.get<OutbreakCategoryResolver>(OutbreakCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
