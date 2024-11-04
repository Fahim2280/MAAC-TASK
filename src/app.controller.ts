import { Get, Controller, Render } from 'services/node_modules/@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('login')
  @Render('signin')
  showLogin() {
    return;
  }
}
