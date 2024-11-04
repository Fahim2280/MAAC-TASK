import { Injectable } from 'services/node_modules/@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! fahim ';
  }
}
