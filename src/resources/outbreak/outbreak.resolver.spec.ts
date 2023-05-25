import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakResolver } from './outbreak.resolver';
import { OutbreakService } from './outbreak.service';

describe('OutbreakResolver', () => {
  let resolver: OutbreakResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakResolver, OutbreakService],
    }).compile();

    resolver = module.get<OutbreakResolver>(OutbreakResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
