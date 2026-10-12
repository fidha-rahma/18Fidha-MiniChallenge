import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CircleDTO {
    @IsNotEmpty() // Should be send
    @IsNumber() // Should be a number
    @Type(() => Number) // Convert data to type number
    @Min(1) // Minimal value is 1
    radius!: number
}
