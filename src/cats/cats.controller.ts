import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';
import { Cat } from '../interfaces/cat.interface';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.catsService.delete(id);
  }
}
