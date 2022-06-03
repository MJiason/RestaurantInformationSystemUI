export class OrderStatuses {
  private _orderStatuses!: string[];

  constructor(orderStatuses: string[]) {
    this._orderStatuses = orderStatuses;
  }

  get orderStatuses(): string[] {
    return this._orderStatuses;
  }

  set orderStatuses(value: string[]) {
    this._orderStatuses = value;
  }
}
