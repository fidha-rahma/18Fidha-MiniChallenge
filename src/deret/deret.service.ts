import { Injectable } from '@nestjs/common';

@Injectable()
export class DeretService {
    getDeret(jenis: string, jumlah: number): string {
    // Membuat deret
    let data: number[] = [];
    let total: number = 0;
    for (let i = 1; i <= jumlah; i++) {
    let nilai: number; 
    if (jenis === 'ganjil') {
      nilai = 2 * i - 1;
    } else if (jenis === 'genap') {
      nilai = 2 * i;
    } else {
      nilai = i * i;
    }
    data.push(nilai); // data.push buat masukin ke let data nya 
    total += nilai;
  }
  return `{
    "jenis": "${jenis}",
    "jumlah": ${jumlah},
    "data": [${data.join(', ')}],
    "total": ${total}
  }`;
}
}
