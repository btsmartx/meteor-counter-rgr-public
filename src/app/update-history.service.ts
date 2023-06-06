import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateHistoryService {
  private update: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getUpdate() {
    return this.update.asObservable();
  }

  public setUpdate() {
    this.update.next(true);
  }

  constructor() { }
}
