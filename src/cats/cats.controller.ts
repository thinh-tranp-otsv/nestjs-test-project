import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Query() panigationQuery) {
    // const { q1, q2 } = panigationQuery;
    // return `This action returns all cats. Q1: ${q1} , Q2: ${q2} `;
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    // console.log(typeof id);
    return this.catsService.findOne('' + id);
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCatDto: CreateCatDto) {
    // console.log(createCatDto instanceof CreateCatDto);
    return this.catsService.create(createCatDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
