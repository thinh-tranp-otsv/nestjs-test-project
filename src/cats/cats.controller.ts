import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action return #${params.id} cat`;
  }

  @Post()
  create(@Body() body) {
    return `${JSON.stringify(body)} OK `;
  }
}
