import { Test, TestingModule } from '@nestjs/testing';
import { ProvinceResolver } from './province.resolver';
import { ProvinceService } from './province.service';

describe('ProvinceResolver', () => {
  let resolver: ProvinceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvinceResolver, ProvinceService],
    }).compile();

    resolver = module.get<ProvinceResolver>(ProvinceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
