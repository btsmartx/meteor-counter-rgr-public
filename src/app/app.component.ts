import { Component } from '@angular/core';
import { InfocardComponent } from './infocard/infocard.component';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from './info-popup/info-popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) { }
  title = 'meteor-counter';

  onSettingsClick() {
    
  }

  onInfoClick() {
    this.dialog.open(InfoPopupComponent);
  }
}
