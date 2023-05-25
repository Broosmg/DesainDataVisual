import { Injectable } from '@nestjs/common';
import { CreateOutbreakInput } from './dto/create-outbreak.input';
import { UpdateOutbreakInput } from './dto/update-outbreak.input';
import { GetOutbreakArgs } from './dto/get-outbreak.args';

@Injectable()
export class OutbreakService {
  create(createOutbreakInput: CreateOutbreakInput) {
    return 'This action adds a new outbreak';
  }

  findAll(getOutbreakArgs: GetOutbreakArgs) {
    return `This action returns all outbreak`;
  }

  findOne(id: string) {
    return `This action returns a #${id} outbreak`;
  }

  update(id: string, updateOutbreakInput: UpdateOutbreakInput) {
    return `This action updates a #${id} outbreak`;
  }

  remove(id: string) {
    return `This action removes a #${id} outbreak`;
  }
}
