import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import {Type} from 'class-transformer'

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

  @IsDate()
  // This is an class-transformer
  @Type(()=>Date)
  publichedOn?: Date;
}
