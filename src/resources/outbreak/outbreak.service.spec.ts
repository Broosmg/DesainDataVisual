import { Test, TestingModule } from '@nestjs/testing';
import { OutbreakService } from './outbreak.service';

describe('OutbreakService', () => {
  let service: OutbreakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutbreakService],
    }).compile();

    service = module.get<OutbreakService>(OutbreakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
