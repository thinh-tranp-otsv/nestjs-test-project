import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      name: 'cat 1',
      type: 'type 1',
      accessory: ['A1', 'A2'],
    },
    {
      id: 2,
      name: 'cat 2',
      type: 'type 2',
      accessory: ['A2', 'A3'],
    },
  ];

  findAll() {
    return this.cats;
  }

  findOne(id: string) {
    const cat = this.cats.find((cat) => +cat.id === +id);
    if (!cat) {
      // throw new HttpException(`cat ${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`cat ${id} not found`);
    }
    return cat;
  }

  create(createCatDto: any) {
    this.cats.push(createCatDto);
    return createCatDto;
  }

  update(id: string, updateCatDto: any) {
    const existingCat = this.findOne(id);
    if (existingCat) {
    }
  }

  remove(id: string) {
    const catIndex = this.cats.findIndex((item) => +item.id === +id);
    if (catIndex >= 0) {
      this.cats.splice(catIndex, 1);
    }
  }
}
