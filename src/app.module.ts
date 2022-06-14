import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros_controller';
import { LivrosService } from './livros_services';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule { }
