import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Accessory } from './entities/accessory.entity';
import { Cat } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat, Accessory])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
