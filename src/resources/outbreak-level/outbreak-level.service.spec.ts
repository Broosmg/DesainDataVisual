import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakLevelService } from './outbreak-level.service';

describe('OutbreakLevelService', () => {
  let service: OutbreakLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakLevelService],
    }).compile();

    service = module.get<OutbreakLevelService>(OutbreakLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
