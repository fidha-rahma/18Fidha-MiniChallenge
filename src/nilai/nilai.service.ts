import { Injectable } from '@nestjs/common';

@Injectable()
export class NilaiService {
    countHitungNilai(
    nama: string,
    tugas: number[],
    uts: number,
    uas: number
    ): string {

  // Rata-rata dari tugas
  let totalTugas = 0;
  for (const nilai of tugas) {
    totalTugas += nilai;
  }
  const rataTugas = totalTugas / tugas.length;

  // Menghitung nilai akhir
  let nilaiAkhir =
    (0.3 * rataTugas) +
    (0.3 * uts) +
    (0.4 * uas);
    
  // Membulatkan 2 angka di belakang koma
  nilaiAkhir = Math.round(nilaiAkhir * 100) / 100;

  // Menghitung predikat
  let predikat: string;
  if (nilaiAkhir >= 90) {
    predikat = 'A';
  } else if (nilaiAkhir >= 80) {
    predikat = 'B';
  } else if (nilaiAkhir >= 70) {
    predikat = 'C';
  } else {
    predikat = 'D';
  }

  // Menentukan status
  let status: string;

  if (nilaiAkhir >= 75) {
    status = 'Lulus';
  } else {
    status = 'Remedial';
  }

  return `{
    "nama": "${nama.trim()}",
    "rataTugas": ${rataTugas},
    "nilaiAkhir": ${nilaiAkhir},
    "predikat": "${predikat}",
    "status": "${status}"
  }`;
}
}

