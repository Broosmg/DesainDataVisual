import { Test, TestingModule } from '@nestjs/testing';
import { ChartResolver } from './chart.resolver';
import { ChartService } from './chart.service';

describe('ChartResolver', () => {
  let resolver: ChartResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartResolver, ChartService],
    }).compile();

    resolver = module.get<ChartResolver>(ChartResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
