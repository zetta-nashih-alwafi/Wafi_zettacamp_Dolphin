import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormattingService {
  constructor() { }
  formatNumber(value: number): string {
    const re = '\\d(?=(\\d{' + (3 || 3) + '})+' + (0 > 0 ? '\\.' : '$') + ')';
    return value.toFixed(Math.max(0, ~~0)).replace(new RegExp(re, 'g'), '$&,');
  }
}
