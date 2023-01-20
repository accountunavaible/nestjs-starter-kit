import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import DefaultConfig from './config/default.config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DefaultConfig.db.host,
      port: DefaultConfig.db.port,
      username: DefaultConfig.db.username,
      password: DefaultConfig.db.password,
      database: DefaultConfig.db.database,
      // you can either choose autoload entities or manually
      autoLoadEntities: true,
      // make sure this is remove when you deploy your application
      synchronize: true,
    }),
    TestModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
