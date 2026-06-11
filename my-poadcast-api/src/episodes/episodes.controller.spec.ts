import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockFindOne = jest.fn();   // Its creates an mock function

  const mockEpisodesService = {    // This is the fake version of the real EpisodesService.
    findAll: async () => [{ ep_id: 'id' }],
    findFeaturedEpisodes: async () => [{ ep_id: 'id' }],
    findOne: mockFindOne,
    create: async () => [{ ep_id: 'id' }],
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({  // This builds an mini application context that wires everything together for testing.
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
    const episodeId = 'id';
    const mockResult = { id: episodeId, name: 'my episodes' };

    beforeEach(() => {
      mockFindOne.mockResolvedValue(mockResult);
    });

    it('ok find one working', async () => {
      const result = await controller.findOne(episodeId);
      expect(result);
    });
  });

  describe('findAll', () => {
    const sort = 'asc';
    it('Find all working fine', async () => {
      const allData = await controller.findAll(sort);
      expect(allData);
    });
  });
});
