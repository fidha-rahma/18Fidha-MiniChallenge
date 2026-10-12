import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(`greeting/:name`)
  getGreeting(@Param(`name`) name: string): string{
    return this.appService.getGreeting(name);
  }
  @Get(`age-category/:age`)
  getAgeCategory(@Param(`age`) age: string){
  return this.appService.getAgeCategory(Number(age));
  }
  @Get('bmi')
  getBMI(@Query('weight') weight: string, @Query('height') height: string): string {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      return 'Invalid input';
    }
    return this.appService.getBMI(weightNumber, heightNumber);
  }
  @Post('luas-balok')
  countLuasBalok(@Body('panjang') panjang: number, @Body('lebar') lebar: number) {
    return this.appService.countLuasBalok(panjang, lebar);
  }
  @Get('bilangan')
  getBilangan(@Query('angka') angka: string): string {
  const angkaNumber = parseFloat(angka);
  if (isNaN(angkaNumber)) {
    return 'Invalid input';
  }
  return this.appService.getBilangan(angkaNumber);
  }
  
  @Get('suhu/konversi')
  getKonversiSuhu(
    @Query('nilai') nilai: string,
    @Query('dari') dari: string,
    @Query('ke') ke: string
  ): string {
  if (!nilai || !dari || !ke) {
    return 'Invalid input';
  }
  const nilaiNumber = parseFloat(nilai);
  if (isNaN(nilaiNumber)) {
    return 'Invalid input';
  }
  return this.appService.getKonversiSuhu(
    nilaiNumber,
    dari,
    ke
  );
} 
@Get('deret:jenis')
getDeret(
  @Param('jenis') jenis: string,
  @Query('jumlah') jumlah: string
): string {
  // Validasi jumlah wajib diisi
  if (!jumlah) {
    return 'Invalid input';
  }
  const jumlahNumber = parseFloat(jumlah);
  if (isNaN(jumlahNumber)) {
    return 'Invalid input';
  }
  return this.appService.getDeret(jenis, jumlahNumber);
}

@Post('nilai')
hitungNilai(@Body() body: any): string {
  const { nama, tugas, uts, uas } = body;
  return this.appService.countHitungNilai(
    nama,
    tugas,
    uts,
    uas
  );
}
// FIDHA DWI RAHMAWATI
}
