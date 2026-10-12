import { Injectable } from '@nestjs/common';
import { CircleDTO } from './dto/circle.dto.js';

@Injectable()
export class GeometryService {
    countCircleArea(CircleDto: CircleDTO) {
        const area = Math.PI * CircleDto.radius * CircleDto.radius
        return {
            massage: `Area of circle has counted`,
            data: area
        }
    }
}
