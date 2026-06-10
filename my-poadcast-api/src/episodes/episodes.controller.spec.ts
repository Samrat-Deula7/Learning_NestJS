import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';
import { create } from 'domain';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockEpisodesService = {
    findAll: async () => [{ ep_id: 'id' }],
    findFeaturedEpisodes: async () => [{ ep_id: 'id' }],
    findOne: async () => [{ ep_id: 'id' }],
    create: async () => [{ ep_id: 'id' }],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [EpisodesController],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('ok find one working', async () => {
      const episodeId = 'id';
      const result = await controller.findOne(episodeId);
      expect(result)
    });
  });
});
