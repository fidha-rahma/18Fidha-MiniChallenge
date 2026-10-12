import { Controller, Get, Query } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';

@Controller('bilangan')
export class BilanganController {
  constructor(
    private readonly bilanganService: BilanganService,
  ) {}

  @Get()
  getBilangan(@Query('angka') angka: string): string {
    const angkaNumber = parseFloat(angka);

    if (isNaN(angkaNumber)) {
      return 'Invalid input';
    }
    return this.bilanganService.getBilangan(angkaNumber);
  }
}
