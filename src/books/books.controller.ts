import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Book } from './booksdto/booksdto.js';
import { CreateBookDto } from './booksdto/booksdto.js';
import { UpdateBookDto } from './booksdto/booksdto.js';
import { BooksService } from './books.service.js';


@Controller('books')
export class BooksController {
constructor(private readonly booksService: BooksService) {}
 
  @Get()
  findAll() {
    return this.booksService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }
 
  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }
 
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBookDto) {
    return this.booksService.update(id, dto);
  }
 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.booksService.remove(id);
    return { message: `Buku id ${id} berhasil dihapus` };
  }
}