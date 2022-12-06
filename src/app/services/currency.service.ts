import { Injectable } from '@angular/core';
import { Currency, ExchangeRate } from '../data/currency';
import { ExchangeStore } from '../store/exchange.store';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(
    private exchangeRateData: ExchangeRate,
    private exchangeStore: ExchangeStore
  ) {}

  public async loadExchangeRate(): Promise<void> {
    try {
      const currency: Currency[] =
        await this.exchangeRateData.getExchangeRatesList();
      this.exchangeStore.exchangeRates$.next(currency);
    } catch {
      this.exchangeStore.exchangeRates$.next([]);
    }
  }
}
