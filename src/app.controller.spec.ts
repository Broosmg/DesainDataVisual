import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;
  const title = 'DVD (Desain Visualisasi Data)';

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return title in object', () => {
      expect(appController.root()).toBe({ title: title });
    });
  });

  describe('map', () => {
    it('should return title in object', () => {
      expect(appController.root()).toBe({ title: title });
    });
  });

  describe('healthCheck', () => {
    it('should return result is true', () => {
      expect(appController.healthCheck()).toBe({ result: true });
    });
  });
});
