import { Get, Injectable } from '@nestjs/common';
import { error } from 'console';
import e from 'express';
import { webSocket } from 'rxjs/webSocket';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCats(): string {
    return 'This action returns all cats';
  }

  getGreeting(name: string): string{
    return `Hello, ${name}!`;
  }
  getAgeCategory(age: number){
    if (age < 10) {
      return "Balita";
    } else if (age <= 17) {
      return "Remaja";
    } else {
      return "Dewasa";
    }
  }

  getBMI(weight: number, height: number): string{
     // Validasi 
    if(height <= 0 || weight <= 0){
      return 'Invalid input';
    }
    if (isNaN(weight) || isNaN(height)) {
      return 'Invalid input'
    }
    // Calculate BMI
    const bmi = weight / (height * height);
    let category: string ="";
    if(bmi <18.5){
        category = 'Underweight';
    }else if (bmi >= 18.5 && bmi <24.9){
       category = 'Normal weight';
    } else if (bmi >= 25 && bmi <29.9){
      category = 'Overweight';
    }else{
      category ='Obesity';
    }
    return `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  countLuasBalok(panjang: number, lebar: number): number {
    if(panjang <= 0 || lebar <=0){
      throw new Error('Panjang dan lebar harus lebih besar dari 0');
    }
    return panjang * lebar;
  }
  countBelahKetupat(d1: number, d2: number, sisi: number): 
  {luas: number, keliling: number} {
    if (d1 <=0 || d2 <= 0) {
      throw new Error('Diagonal harus lebih besar dari 0');
    }
    const luas = (d1 * d2) / 2;
    const keliling = 4 * sisi;
    const result = {
      luas: luas,
      keliling: keliling,
    };
    return result; 
  } 
// NOMOR 1
getBilangan(angka: number): string {
  // Validasi
  if (isNaN(angka)) {
    return 'Invalid input';
  }
  if (!Number.isInteger(angka)) {
    return 'Invalid input';
  }
  if (angka < 0 || angka > 100) {
    return 'Invalid input';
  }
  // Menentukan jenis bilangan
  let jenis: string = "";
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

// NOMOR 2
getKonversiSuhu(nilai: number, dari: string, ke:string): string {
  // Validasi nilai
  if (isNaN(nilai)) {
    return 'Invalid input';
  }
  // Validasi satuan 
  const Satuan = ['celsius', 'fahrenheit', 'kelvin'];
  if (!Satuan.includes(dari) || !Satuan.includes(ke)) {
    return 'Invalid input';
  }
  // Satuan tidak boleh sama
  if (dari === ke){
    return 'Invalid input';
  }
  // Kelvin tidak boleh negatif
  if (dari === 'kelvin' && nilai < 0){
    return 'Invalid input';
  }
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

// Nomor 3
getDeret(jenis: string, jumlah: number): string {
  // Validasi jenis
  const jenisDeret = ['ganjil', 'genap', 'kuadrat'];
  if (!Number.isInteger(jumlah)) {
    return 'Invalid input';
  }
  if (jumlah < 1 || jumlah > 20) {
    return 'Invalid input';
  }
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
// Nomor 4
countHitungNilai(
  nama: string,
  tugas: number[],
  uts: number,
  uas: number
): string {

  // Validasi nama
  if (typeof nama !== 'string' || nama.trim() === '') {
    return 'Invalid input';
  }
  // Validasi tugas
  if (!Array.isArray(tugas) || tugas.length < 1) {
    return 'Invalid input';
  }
  // Validasi nilai dari tugas
  for (const nilai of tugas) {
    if (typeof nilai !== 'number' || isNaN(nilai) || nilai < 0 || nilai > 100) {
      return 'Invalid input';
    }
  }
  // Validasi uts
  if (typeof uts !== 'number' || isNaN(uts) || uts < 0 || uts > 100) {
    return 'Invalid input';
  }

  // Validasi uas
  if (typeof uas !== 'number' || isNaN(uas) || uas < 0 || uas > 100) {
    return 'Invalid input';
  }

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