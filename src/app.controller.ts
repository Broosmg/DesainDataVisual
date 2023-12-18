import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  private title = 'DVD';

  @Get()
  @Render('index')
  root() {
    return { title: this.title };
  }

  @Get('map')
  @Render('map')
  map() {
    return { title: this.title };
  }
}
