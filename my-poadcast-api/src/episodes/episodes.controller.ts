import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EpisodesService } from '@episodes/episodes.service';
import { type CreateEpisodeDto } from '../../entity/episode.entity';
import { ConfigService } from '@config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit',ParseIntPipe) limit?: number,
  ) {
    console.log(sort);
    return this.episodesService.findAll(sort);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log(id);
    const episode = await this.episodesService.findOne(id);
    if(!episode){
      throw new Error("Episode not found");

      // Some other error

      // throw new HttpException('Episode not found',HttpStatus.NOT_FOUND);
      // throw new NotFoundException('Episode not found')
      
    }

    return episode;
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    console.log(input);
    return this.episodesService.create(input);
  }
}
