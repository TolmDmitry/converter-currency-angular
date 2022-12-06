import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Currency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Injectable({ providedIn: 'root' })
export class ExchangeRate {
  constructor(private http: HttpClient) {}

  public async getExchangeRatesList(): Promise<Currency[]> {
    const result = await firstValueFrom(
      this.http.get<Currency[]>(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
      )
    );

    result.unshift({
      r030: 980,
      txt: 'Гривня',
      rate: 1,
      cc: 'UAH',
      exchangedate: '15.11.2022',
    });

    return result;
  }
}
