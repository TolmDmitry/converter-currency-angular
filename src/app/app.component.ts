import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExchangeService } from './services/currency.service';
import { ExchangeStore } from './store/exchange.store';
import { CurrencyData } from './ui/currency-item/currency-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public firstCurrency = 0;
  public secondCurrency = 0;

  public firstValue = 0;
  public secondValue = 0;

  constructor(
    public exchangeStore: ExchangeStore,
    private exchangeService: ExchangeService
  ) {
    this.exchangeService.loadExchangeRate();
  }

  public selectHandler(selectedCurrency: CurrencyData, index: number) {
    if (index === 1) {
      this.firstCurrency = selectedCurrency.currency;
      this.firstValue = selectedCurrency.value;
    } else {
      this.secondCurrency = selectedCurrency.currency;
      this.secondValue = selectedCurrency.value;
    }
  }

  public actualExchangeRates(): string {
    const rates = this.exchangeStore.exchangeRates$.value.filter(
      (currency) => currency.r030 === 978 || currency.r030 === 840
    );

    return ` ${rates.map((data) => ` ${data.cc}/UAH ${data.rate} `)}`;
  }
}
