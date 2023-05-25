import { Module } from '@nestjs/common';
import { OutbreakCategoryService } from './outbreak-category.service';
import { OutbreakCategoryResolver } from './outbreak-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutbreakCategory } from './entities/outbreak-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutbreakCategory])],
  providers: [OutbreakCategoryResolver, OutbreakCategoryService],
  exports: [OutbreakCategoryService],
})
export class OutbreakCategoryModule {}
