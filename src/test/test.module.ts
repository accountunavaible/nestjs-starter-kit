import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TestController],
})
export class TestModule {}
