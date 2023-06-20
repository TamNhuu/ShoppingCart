import { Injectable } from '@angular/core';
import { Promocode } from './promocode.model';

@Injectable({
  providedIn: 'root',
})
export class PromocodeService {
  constructor() {}

  promoCodes: Promocode[] = [
    {
      code: 'MIMI',
      discountPercent: 10,
    },
    {
      code: 'BEBE',
      discountPercent: 50,
    },
  ];

  applyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code == code
    );
    if (promoCode) {
      return promoCode.discountPercent;
    }
    return 0;
  }
}
