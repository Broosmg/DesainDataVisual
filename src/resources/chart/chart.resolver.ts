import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChartService } from './chart.service';
import { Chart } from './entities/chart.entity';
import { GetChartArgs } from './dto/get-chart.args';
import { GetCityTopArgs } from './dto/get-cityTop.args';
import { CityTop } from './entities/cityTop.entity';

@Resolver(() => Chart)
export class ChartResolver {
  constructor(private readonly chartService: ChartService) {}

  @Query(() => [Chart], { name: 'chart' })
  findAll(@Args() getChartArgs: GetChartArgs) {
    return this.chartService.findAll(getChartArgs);
  }

  @Query(() => [CityTop], { name: 'cityTop' })
  cityTop(@Args() getCityTopArgs: GetCityTopArgs) {
    return this.chartService.cityTop(getCityTopArgs);
  }
}
