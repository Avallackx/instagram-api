import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './common/auth/auth.module';
import { UserModule } from './modules/User/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SvcConfigModule } from './config';
import { HttpModule } from '@nestjs/axios';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    SvcConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<{ database: DataSourceOptions }, true>) =>
        configService.get('database'),
    }),
    HttpModule.register({
      timeout: 5000,
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
