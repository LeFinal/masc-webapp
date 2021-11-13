import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

/**
 * Provides time date every second.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class TimeService {

  private time = new BehaviorSubject<Date>(new Date());

  constructor() {
    timer(0, 1000)
      .subscribe(() => {
        this.time.next(new Date());
      });
  }

  getTime(): Observable<Date> {
    return this.time.asObservable();
  }
}
