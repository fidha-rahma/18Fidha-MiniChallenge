import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { KasirModule } from './kasir/kasir.module.js';

@Module({
  imports: [BooksModule, GeometryModule, KasirModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
