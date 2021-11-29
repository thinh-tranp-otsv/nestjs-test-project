import { IsString } from 'class-validator';
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString({ each: true })
  readonly accessory: string[];
}
