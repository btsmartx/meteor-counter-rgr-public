import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UpdateHistoryService } from '../update-history.service';
import { HistoryEntry } from '../historyEntry';

@Component({
  selector: 'app-maingrid',
  templateUrl: './maingrid.component.html',
  styleUrls: ['./maingrid.component.css']
})
export class MaingridComponent {
  constructor(private cookies: CookieService, private updatesvc: UpdateHistoryService) {}

  ngOnInit() {
    this.updatesvc.getUpdate().subscribe((update) => {
      if (update) {
        this.history = this.cookies.get('history') ? JSON.parse(this.cookies.get('history')) : [];
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        for (let i = 0; i < this.history.length; i++) {
          if (this.history[i].shower == "PER") {
            count1++;
          } else if (this.history[i].shower == "SPO") {
            count2++;
          } else if (this.history[i].shower == "RESET") {
            count3++;
          }
        }
        this.btncount1 = count1;
        this.btncount2 = count2;
        this.btncount3 = count3;
        
      }
    });
    this.updatesvc.setUpdate();
  }

  btncount1: number = 0;
  btncount2: number = 0;
  btncount3: number = 0;

  history: HistoryEntry[] = this.cookies.get('history') ? JSON.parse(this.cookies.get('history')) : [];

  shower1: string = "PER";
  shower2: string = "SPO";
  shower3: string = "RESET";

  onbtn1click() {
    this.history.unshift({ "shower": this.shower1, "time": new Date().toLocaleString() });
    this.cookies.set('history', JSON.stringify(this.history));
    this.updatesvc.setUpdate();
  }
  onbtn2click() {
    this.history.unshift({ "shower": this.shower2, "time": new Date().toLocaleString() });
    this.cookies.set('history', JSON.stringify(this.history));
    this.updatesvc.setUpdate();
  }
  onbtn3click() { 
    this.history = [];
    this.cookies.set('history', JSON.stringify(this.history));
    this.updatesvc.setUpdate();
  }

}
