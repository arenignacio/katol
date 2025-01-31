import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedController } from './controllers/seed/seed.controller';
import { DatabaseService } from './services/database/database.service';

@Module({
  imports: [],
  controllers: [AppController, SeedController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
