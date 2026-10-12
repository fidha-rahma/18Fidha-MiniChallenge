import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export enum SatuanSuhu {
    CELCIUS = 'celcius',
    FAHRENHEIT = 'fahrenheit',
    KELVIN = 'kelvin',
}
export class TemperatureDTO{
    @IsNotEmpty()
    @IsNumber()
    nilai: number;

    @IsNotEmpty()
    @IsEnum(SatuanSuhu)
    dari: SatuanSuhu;

    @IsNotEmpty()
    @IsEnum(SatuanSuhu)
    ke: SatuanSuhu;
}