import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UpdateHistoryService } from '../update-history.service';

@Component({
  selector: 'app-countlist',
  templateUrl: './countlist.component.html',
  styleUrls: ['./countlist.component.css']
})
export class CountlistComponent {
  constructor(private cookies: CookieService, private updateHistoryService: UpdateHistoryService) {}

  history = this.cookies.get('history') ? JSON.parse(this.cookies.get('history')) : [];

  ngOnInit() {
    this.updateHistoryService.getUpdate().subscribe((update) => {
      if (update) {
        this.history = this.cookies.get('history') ? JSON.parse(this.cookies.get('history')) : [];
      }
    });
  }
}