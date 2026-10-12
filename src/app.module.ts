import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { KasirModule } from './kasir/kasir.module.js';
import { BilanganModule } from './bilangan/bilangan.module.js';
import { SuhuModule } from './suhu/suhu.module.js';
import { DeretModule } from './deret/deret.module.js';
import { NilaiModule } from './nilai/nilai.module.js';

@Module({
  imports: [BooksModule, GeometryModule, KasirModule, BilanganModule, SuhuModule, DeretModule, NilaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
