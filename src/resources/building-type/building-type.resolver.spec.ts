import { Test, TestingModule } from '@nestjs/testing';
import { BuildingTypeResolver } from './building-type.resolver';
import { BuildingTypeService } from './building-type.service';

describe('BuildingTypeResolver', () => {
  let resolver: BuildingTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingTypeResolver, BuildingTypeService],
    }).compile();

    resolver = module.get<BuildingTypeResolver>(BuildingTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
