import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  get codes() {
    return this.super.code();
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be an integer');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('value must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static converPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && typeof conversionRate !== 'number') {
      throw new TypeError('Amount and ConversionRate must be integer');
    }
    return amount * conversionRate;
  }
}
