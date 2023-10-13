import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService], // Export ConfigService to make it available for injection in other modules
})
export class ConfigModule {}