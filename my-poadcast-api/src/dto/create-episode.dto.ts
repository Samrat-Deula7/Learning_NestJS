import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDto {
  @IsString()
  id: string = '';
  // This is an class-validator
  @IsString()
  ep_title: string = '';

  @IsString()
  ep_desc: string = '';

  // This is an class-validator
  @IsBoolean()
  @IsOptional()
  ep_featured?: boolean;
}
