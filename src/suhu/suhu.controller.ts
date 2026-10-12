import { Controller, Get, Query } from '@nestjs/common';
import { SuhuService } from './suhu.service.js';
import { TemperatureDTO } from './dto/temperature.dto.js';

@Controller()
export class SuhuController {
  constructor(private readonly suhuService: SuhuService) {}

  @Get('suhu/konversi')
  getKonversiSuhu(@Query() dto: TemperatureDTO): string {
    return this.suhuService.getKonversiSuhu(
      dto.nilai,
      dto.dari,
      dto.ke,
    );
  }
}
