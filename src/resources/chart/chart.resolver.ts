import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChartService } from './chart.service';
import { Chart } from './entities/chart.entity';
import { GetChartArgs } from './dto/get-chart.args';

@Resolver(() => Chart)
export class ChartResolver {
  constructor(private readonly chartService: ChartService) {}

  @Query(() => [Chart], { name: 'chart' })
  async findAll(@Args() getChartArgs: GetChartArgs) {
    return this.chartService.findAll(getChartArgs);
  }
}
