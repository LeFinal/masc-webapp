import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ``,
})
export class SubscriptionComponent implements OnDestroy {

  private s: Subscription[] = [];

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }

  protected pushS(s: Subscription): void {
    this.s.push(s);
  }
}
