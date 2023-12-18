import { ArgsType } from '@nestjs/graphql';
import { GetChartArgs } from './get-chart.args';

@ArgsType()
export class GetCityTopArgs extends GetChartArgs {}
