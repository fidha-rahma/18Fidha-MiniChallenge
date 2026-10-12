import { Body, Controller, Post } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { CircleDTO } from './dto/circle.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post("/circle")
  countAreaOfCircle(@Body() dto: CircleDTO){
    return this.geometryService.countCircleArea(dto)
  }
}
