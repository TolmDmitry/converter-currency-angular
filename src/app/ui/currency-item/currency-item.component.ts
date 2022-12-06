import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Currency } from 'src/app/data/currency';

export interface CurrencyData {
  currency: number;
  value: number;
}

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyItemComponent {
  @Input()
  public currencies: Currency[] = [];

  @Input()
  public rate = 0;

  @Input()
  public exchangeValue = 0;

  @Output()
  public selectCurrency = new EventEmitter<CurrencyData>();

  public currencyValue = 0;
  public currencyRate = 0;

  public onSelect(selected: boolean) {
    const value = selected
      ? this.exchangeValue * +(this.rate / this.currencyRate)
      : this.currencyValue;

    this.selectCurrency.emit({
      currency: this.currencyRate,
      value,
    });
  }
}
