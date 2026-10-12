import { IsInt, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export enum JenisDeret {
    GANJIL = 'ganjil',
    GENAP = 'genap',
    KUADRAT = 'kuadrat',
}
export class DeretDto {
    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(20)
    jumlah: number;
}