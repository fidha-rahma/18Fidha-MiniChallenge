import { Body, Controller, Post } from '@nestjs/common';
import { NilaiService } from './nilai.service.js';
import { NilaiDto } from './dto/nilai.dto.js';

@Controller('nilai')
export class NilaiController {
  constructor(
    private readonly nilaiService: NilaiService,
  ) {}

  @Post()
  hitungNilai(@Body() dto: NilaiDto): string {
    const { nama, tugas, uts, uas } = dto;

    return this.nilaiService.countHitungNilai(
      nama,
      tugas,
      uts,
      uas,
    );
  }
}

