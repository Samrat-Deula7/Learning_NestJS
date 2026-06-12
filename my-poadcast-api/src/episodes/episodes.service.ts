import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { type Episode, type CreateEpisodeDto } from '../entity/episode.entity';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];

  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Episode, b: Episode) =>
      a.ep_title > b.ep_title ? 1 : -1;
    const sortDesc = (a: Episode, b: Episode) =>
      a.ep_title > b.ep_title ? 1 : -1;

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  async findFeatured() {
    return this.episodes.filter((episodes) => episodes.ep_featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episodes) => episodes.ep_id === id);
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    const newEpisode = { ...createEpisodeDto, ep_id: randomUUID() };
    this.episodes.push(newEpisode);
    return newEpisode;
  }
}
