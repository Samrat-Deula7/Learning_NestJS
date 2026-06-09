import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';
import { EpisodesController } from './episodes/episodes.controller';

@Module({
  imports: [EpisodesModule, TopicsModule, ConfigModule],
  controllers: [AppController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
