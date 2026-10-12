import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class NilaiDto {
    @IsNotEmpty()
    @IsString()
    nama: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsNumber()
    @Min(0)
    @Max(100)
    tugas: number[];

    @IsNumber()
    @Min(0)
    @Max(100)
    uts: number;

    @IsNumber()
    @Min(0)
    @Max(100)
    uas: number;
}