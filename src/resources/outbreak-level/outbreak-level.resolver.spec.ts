import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakLevelResolver } from './outbreak-level.resolver';
import { OutbreakLevelService } from './outbreak-level.service';

describe('OutbreakLevelResolver', () => {
  let resolver: OutbreakLevelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakLevelResolver, OutbreakLevelService],
    }).compile();

    resolver = module.get<OutbreakLevelResolver>(OutbreakLevelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
