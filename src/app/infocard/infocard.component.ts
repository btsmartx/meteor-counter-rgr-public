import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UpdateHistoryService } from '../update-history.service';

import { MatDialog } from '@angular/material/dialog';
import { InfoCardPopupComponent } from '../info-card-popup/info-card-popup.component';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent {
  constructor(private cookies: CookieService, private updatesvc: UpdateHistoryService, private dialog: MatDialog) { }
  
  time = new Date();
  time_string: string = "";
  intervalId: any;
  

    ngOnInit() {
      this.updatesvc.getUpdate().subscribe((update) => {
        if (update) {
          this.fov_ra = this.cookies.get('fov_ra') ? parseInt(this.cookies.get('fov_ra')) : 180;
          this.fov_dec = this.cookies.get('fov_dec') ? parseInt(this.cookies.get('fov_dec')) : 120;
          this.field_obs = this.cookies.get('field_obs') ? parseFloat(this.cookies.get('field_obs')) : 1.1;
          this.Lm = this.cookies.get('Lm') ? parseInt(this.cookies.get('Lm')) : 6.01;
        }
      });

      this.intervalId = setInterval(() => {
        this.time = new Date();
        const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' } as const;
        this.time_string = this.time.toLocaleString('uk-UA', options);
      }, 1000);
    }

    fov_ra: number = this.cookies.get('fov_ra') ? Number(this.cookies.get('fov_ra')) : 0;
    fov_dec: number = this.cookies.get('fov_dec') ? Number(this.cookies.get('fov_dec')) : 0;
    field_obs: number = this.cookies.get('field_obs') ? Number(this.cookies.get('field_obs')) : 0;
    Lm: number = this.cookies.get('Lm') ? Number(this.cookies.get('Lm')) : 0;

    openInfoCardPopup(): void {
      const dialogRef = this.dialog.open(InfoCardPopupComponent, {
        width: '700px',
        data: { fov_ra: this.fov_ra, fov_dec: this.fov_dec, field_obs: this.field_obs, Lm: this.Lm }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.cookies.set('fov_ra', result.fov_ra);
        this.cookies.set('fov_dec', result.fov_dec);
        this.cookies.set('field_obs', result.field_obs);
        this.cookies.set('Lm', result.Lm);
        this.updatesvc.setUpdate();
      });
    }
  }
