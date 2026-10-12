import { IsAlpha, IsInt, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class BilanganDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(100)
    angka: number;
}
