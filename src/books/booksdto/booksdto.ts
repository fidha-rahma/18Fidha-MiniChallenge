import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class Book {
  id: number;
  judul: string;
  penulis: string;
  tahun: number;
}

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  judul: string;

  @IsString()
  @IsNotEmpty()
  penulis: string;

  @IsInt()
  tahun: number;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  judul?: string;

  @IsOptional()
  @IsString()
  penulis?: string;

  @IsOptional()
  @IsInt()
  tahun?: number;
}