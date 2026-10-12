import { Injectable } from '@nestjs/common';
@Injectable()
export class BilanganService {
  getBilangan(angka: number): string {
    // Menentukan jenis bilangan
    let jenis: string = '';
    if (angka % 2 === 0) {
      jenis = 'genap';
    } else {
      jenis = 'ganjil';
    }
    // Menghitung kuadrat
    const kuadrat = angka * angka;
    // Menentukan kelipatan 5
    const kelipatanLima = angka % 5 === 0;
    return `Angka: ${angka}, Jenis: ${jenis}, Kuadrat: ${kuadrat}, Kelipatan 5: ${kelipatanLima}`;
  }
}

