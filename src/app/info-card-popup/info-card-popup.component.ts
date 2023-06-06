import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-card-popup',
  template: `
    <h2 mat-dialog-title>Enter Details</h2>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>FOV Ra</mat-label>
        <input matInput [(ngModel)]="fov_ra" type="number" min="0" max="360" (input)="validateInputs()"/>
      </mat-form-field>
      <mat-form-field>
        <mat-label>FOV Dec</mat-label>
        <input matInput [(ngModel)]="fov_dec" type="number" min="0" max="360" (input)="validateInputs()"/>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Field of Obstruction</mat-label>
        <input matInput [(ngModel)]="field_obs" type="number" min="1" max="5" (input)="validateInputs()"/>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Lim Magnitude</mat-label>
        <input matInput [(ngModel)]="Lm" type="number" min="0" max="8" (input)="validateInputs()"/>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button  mat-button [mat-dialog-close]="{ fov_ra: fov_ra, fov_dec: fov_dec, field_obs: field_obs, Lm: Lm }" [disabled]="!isValid">Save</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
        margin: 5px;
      }
    `,
  ],
})
export class InfoCardPopupComponent {
  fov_ra!: number;
  fov_dec!: number;
  field_obs!: number;
  Lm!: number;
  isValid: boolean = false;

  constructor(public dialogRef: MatDialogRef<InfoCardPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.fov_ra = data.fov_ra;
      this.fov_dec = data.fov_dec;
      this.field_obs = data.field_obs;
      this.Lm = data.Lm;
      this.validateInputs();
    }

  onCancel(): void {
    this.dialogRef.close();
  }

  validateInputs(): void {
    this.isValid =
      this.fov_ra >= 0 &&
      this.fov_ra <= 360 &&
      this.fov_dec >= 0 &&
      this.fov_dec <= 360 &&
      this.field_obs >= 1 &&
      this.field_obs <= 5 &&
      this.Lm >= 0 &&
      this.Lm <= 8;
  }
}