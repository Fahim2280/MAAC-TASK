
import { Module } from 'services/node_modules/@nestjs/common';
import { TypeOrmModule } from 'services/node_modules/@nestjs/typeorm';
import { User } from '../models/user.entity';
import { UserService } from '../services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}