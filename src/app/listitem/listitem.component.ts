import { Component, Input } from '@angular/core';
import { HistoryEntry } from '../historyEntry';
import { CookieService } from 'ngx-cookie-service';
import { UpdateHistoryService } from '../update-history.service';
UpdateHistoryService

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent {
  constructor(private cookies: CookieService, private updatesvc: UpdateHistoryService) {}
  @Input() entry?: HistoryEntry;

  removeEntry() {
    let history: HistoryEntry[] = this.cookies.get('history') ? JSON.parse(this.cookies.get('history')) : [];
    for (let i = 0; i < history.length; i++) {
      if (history[i].time == this.entry?.time) {
        history.splice(i, 1);
        this.cookies.set('history', JSON.stringify(history));
        break;
      }
    }
    console.log(this.cookies.get('history'));
    this.updatesvc.setUpdate();
  }
}