import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDtoChecker {
  // This is an class-validator
  @IsString()
  ep_title?: string;

  // This is an class-validator
  @IsBoolean()
  @IsOptional()
  ep_featured?: boolean;
}
