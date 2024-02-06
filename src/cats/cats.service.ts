import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, updateCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id).exec();
  }
}