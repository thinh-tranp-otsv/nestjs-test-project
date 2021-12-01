import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  // private cats: Cat[] = [
  //   {
  //     id: 1,
  //     name: 'cat 1',
  //     type: 'type 1',
  //     accessory: ['A1', 'A2'],
  //   },
  //   {
  //     id: 2,
  //     name: 'cat 2',
  //     type: 'type 2',
  //     accessory: ['A2', 'A3'],
  //   },
  // ];

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  findAll() {
    // return this.cats;
    return this.catRepository.find();
  }

  async findOne(id: string) {
    const cat = await this.catRepository.findOne(id);
    if (!cat) {
      // throw new HttpException(`cat ${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`cat ${id} not found`);
    }
    return cat;
  }

  create(createCatDto: CreateCatDto) {
    const cat = this.catRepository.create(createCatDto);
    return this.catRepository.save(cat);
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepository.preload({
      id: +id,
      ...updateCatDto,
    });
    if (!cat) {
      throw new NotFoundException(`cat ${id} not found`);
    }
    return this.catRepository.save(cat);
  }

  async remove(id: string) {
    const cat = await this.findOne(id);
    return this.catRepository.remove(cat);
  }
}
