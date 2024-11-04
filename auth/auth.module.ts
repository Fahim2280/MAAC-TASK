import { Module } from 'services/node_modules/@nestjs/common';
import { JwtModule } from 'services/node_modules/@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../src/user.module';
import { AuthService } from '../services/auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from '../controllers/auth.controller';  

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret', // Use environment variable in production
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}