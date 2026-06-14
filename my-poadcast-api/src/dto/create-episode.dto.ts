import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import {Type} from 'class-transformer'

export class CreateEpisodeDtoChecker {
  // This is an class-validator
  @IsString()
  ep_title?: string;

  // This is an class-validator
  @IsBoolean()
  @IsOptional()
  ep_featured?: boolean;

  @IsDate()
  @Type(() => Date)
  publichedOn?:Date;
}
