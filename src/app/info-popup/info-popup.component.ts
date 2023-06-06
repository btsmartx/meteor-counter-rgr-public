import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-popup',
  template: `
    <h3 mat-dialog-title>meteor counter v.0.0.2 by btsmartx</h3>
    <mat-dialog-content>
        <p mat-card-title>User guide:</p>
        <p>Click on the meteor to increase the counter. App is capable of tracking PER shower and SPO meteors. Ability to change and add custom showers will be added in future. Ability to export recorded data in CSV including details like FOV, limiting magnitude and field of obstruction for quick submitting to IMO (https://www.imo.net/members/imo_observation/add_observation) will be added in future. <br> You can view recorded meteors in list and remove unwanted records.</p>
      
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCloseClick()">Close</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent {
    constructor(public dialogRef: MatDialogRef<InfoPopupComponent>) { }

    onCloseClick(): void {
        this.dialogRef.close();
    }
}