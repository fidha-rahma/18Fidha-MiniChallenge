import { BadRequestException, Injectable } from '@nestjs/common';
import { CheckoutDto, Member, MetodePembayaran } from './dto/checkout.dto.js';

@Injectable()
export class KasirService {
  checkout(member: string, metode: string, dto: CheckoutDto) {
    const memberValid = member?.toLowerCase();
    const metodeValid = metode?.toLowerCase();

    const diskonMember: Record<Member, number> = {
      [Member.REGULER]: 0,
      [Member.SILVER]: 5,
      [Member.GOLD]: 10,
    };

    // Validasi member
    if (!Object.values(Member).includes(memberValid as Member)) {
      throw new BadRequestException('Member harus reguler, silver, atau gold',);
    }
    // Validasi metode pembayaran
    if (!Object.values(MetodePembayaran).includes(metodeValid as MetodePembayaran,)) {
      throw new BadRequestException('Metode wajib diisi dan harus tunai atau qris',);
    }
    // Validasi items
    if (!dto || !Array.isArray(dto.items)) {
      throw new BadRequestException('Items harus berupa array');
    }
    if (dto.items.length === 0) {
      throw new BadRequestException('Items tidak boleh kosong');
    }
    if (dto.items.length > 10) {
      throw new BadRequestException('Maksimal 10 item');
    }
    // Validasi setiap barang
    for (let i = 0; i < dto.items.length; i++) {
      const item = dto.items[i];

      if (
        item === null || typeof item !== 'object' || Array.isArray(item)
      ) {
        throw new BadRequestException(`Item ke-${i + 1}: harus berupa objek`,);
      }
      if (
        typeof item.nama !== 'string' || item.nama.trim() === ''
      ) {
        throw new BadRequestException(`Item ke-${i + 1}: nama harus string tidak kosong`,);
      }
      if (
        typeof item.harga !== 'number' || !Number.isFinite(item.harga) || item.harga <= 0
      ) {
        throw new BadRequestException(`Item ke-${i + 1}: harga harus angka lebih dari 0`,);
      }
      if (!Number.isInteger(item.qty) || item.qty <= 0) {
        throw new BadRequestException(`Item ke-${i + 1}: qty harus bilangan bulat lebih dari 0`,);
      }
    }
    // Menghitung subtotal setiap barang
    const rincian = dto.items.map((item) => ({
      nama: item.nama,
      harga: item.harga,
      qty: item.qty,
      subtotal: item.harga * item.qty,
    }));

    // Menghitung total barang dan subtotal belanja
    const totalItem = rincian.reduce((total, item) => total + item.qty,0,);

    const subtotal = rincian.reduce((total, item) => total + item.subtotal,0,);

    // Menghitung diskon member
    const diskon = Math.round((subtotal * diskonMember[memberValid as Member]) / 100,);

    // QRIS biaya admin 1%, tunai gratis
    const biayaAdmin =
      metodeValid === MetodePembayaran.QRIS
        ? Math.round(((subtotal - diskon) * 1) / 100)
        : 0;

    // Menghitung total pembayaran
    const total = subtotal - diskon + biayaAdmin;

    return {
      member: memberValid,
      metode: metodeValid,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}
