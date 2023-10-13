import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string): string {
    return process.env[key];
  }

  getDatabaseConnectionString(): string {
    return this.get('MONOGDB_URL');
  }
}