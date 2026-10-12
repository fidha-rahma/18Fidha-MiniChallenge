import {Controller, Get, Param, Query, ParseEnumPipe,} from '@nestjs/common';
import { DeretService } from './deret.service.js';
import { DeretDto, JenisDeret } from './dto/deret.dto.js';

@Controller('deret')
export class DeretController {
  constructor(
    private readonly deretService: DeretService,
  ) {}

  @Get(':jenis')
  getDeret(
    @Param('jenis', new ParseEnumPipe(JenisDeret))
    jenis: JenisDeret,

    @Query() dto: DeretDto,
  ): string {
    return this.deretService.getDeret(
      jenis,
      dto.jumlah,
    );
  }
}
