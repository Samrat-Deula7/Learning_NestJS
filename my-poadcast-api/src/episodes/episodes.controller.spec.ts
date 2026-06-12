import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockFindOne = jest.fn(); // Its creates an mock function

  const mockEpisodesService = {
    // This is the fake version of the real EpisodesService.
    findAll: async () => [{ ep_id: 'id' }],
    findFeaturedEpisodes: async () => [{ ep_id: 'id' }],
    findOne: mockFindOne,
    create: async () => [{ ep_id: 'id' }],
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      // This builds an mini application context that wires everything together for testing.
      imports: [ConfigModule],
      controllers: [EpisodesController],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController); // Sending fake or copy of EpisodesServices instead of mockEpisodesService.
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {

    // This the the describe or group logic that runs when episode is found.

    describe('when episode is found', () => {
      const episodeId = 'id';
      const mockResult = { id: episodeId, name: 'my episodes' };

      beforeEach(() => {
        mockFindOne.mockResolvedValue(mockResult);
      });

      it('should call the service with correct params', async () => { // This checks that the controller calls the service with the right argument.
        await controller.findOne(episodeId);
        expect(mockFindOne).toHaveBeenCalledWith(episodeId);
      });

      it('ok find one working', async () => { // This check that the controller returns a result.
        const result = await controller.findOne(episodeId);
        expect(result);
      });

    });

    // This is the describe or group logic that runs when the episode is not found.

    describe('when episode is not found',()=>{
      const episodeId = 'id2';

      beforeEach(()=>{
        mockFindOne.mockResolvedValue(null);
      });

      it('It should throw an error',async()=>{
        await expect(controller.findOne(episodeId)).rejects.toThrow('Episode not found')
      })
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
