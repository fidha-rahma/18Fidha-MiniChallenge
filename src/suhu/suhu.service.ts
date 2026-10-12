import { Injectable } from '@nestjs/common';

@Injectable()
export class SuhuService {
    
getKonversiSuhu(nilai: number, dari: string, ke:string): string {
  // mengubah nilai ke celcius
  let celsius: number
  if (dari === 'celsius'){
    celsius = nilai;
  } else if (dari === 'fahrenheit'){
    celsius = (nilai - 32) * 5 / 9;
  } else {
    celsius = nilai - 273.15;
  }
  // mengubah Celsius ke satuan tujuan
  let hasil: number;

  if (ke === 'celsius') {
    hasil = celsius;
  } else if (ke === 'fahrenheit') {
    hasil = celsius * 9 / 5 + 32;
  } else {
    hasil = celsius + 273.15;
  }
  // membulatkan maksimal 2 angka di belakang koma
  hasil = Math.round(hasil * 100) / 100;
  return `{
    "nilaiAsal": ${nilai},
    "satuanAsal": "${dari}",
    "hasil": "${hasil}",
    "satuanHasil": "${ke}"
  }`;
}
}
