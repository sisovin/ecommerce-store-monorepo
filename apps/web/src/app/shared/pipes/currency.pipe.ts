import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'USD', symbolDisplay: boolean = true, digitsInfo: string = '1.2-2'): string | null {
    if (value == null) return null;

    const currencySymbol = this.getCurrencySymbol(currencyCode);
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);

    return symbolDisplay ? formattedValue : formattedValue.replace(currencySymbol, '').trim();
  }

  private getCurrencySymbol(currencyCode: string): string {
    switch (currencyCode) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'GBP': return '£';
      // Add more currency codes and symbols as needed
      default: return '';
    }
  }
}
