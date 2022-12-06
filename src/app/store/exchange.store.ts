import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '../data/currency';

@Injectable({
  providedIn: 'root',
})
export class ExchangeStore {
  public readonly exchangeRates$ = new BehaviorSubject<Currency[]>([]);
}
