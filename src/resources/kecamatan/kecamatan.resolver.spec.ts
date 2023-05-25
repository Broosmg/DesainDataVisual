import { Test, TestingModule } from '@nestjs/testing';
import { KecamatanResolver } from './kecamatan.resolver';
import { KecamatanService } from './kecamatan.service';

describe('KecamatanResolver', () => {
  let resolver: KecamatanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KecamatanResolver, KecamatanService],
    }).compile();

    resolver = module.get<KecamatanResolver>(KecamatanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
