import {IsArray, IsString, IsNotEmpty, IsNumber, IsInt,Min,}  from 'class-validator';
export enum MetodePembayaran {
  TUNAI = 'tunai',
  QRIS = 'qris',
}
export enum Member {
  REGULER = 'reguler',
  SILVER = 'silver',
  GOLD = 'gold',
}
export class CheckoutItemDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsNumber()
  @Min(1)
  harga: number;

  @IsInt()
  @Min(1)
  qty: number;
}
export class CheckoutDto {
  @IsArray()
  items: CheckoutItemDto[];
}