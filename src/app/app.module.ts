import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MaingridComponent } from './maingrid/maingrid.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { InfocardComponent } from './infocard/infocard.component';
import { CountlistComponent } from './countlist/countlist.component';
import { ListitemComponent } from './listitem/listitem.component';
import { MatListModule } from '@angular/material/list';
import { CookieService } from 'ngx-cookie-service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CsvButtonComponent } from './csv-button/csv-button.component';
import { InfoCardPopupComponent } from './info-card-popup/info-card-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MaingridComponent,
    InfocardComponent,
    CountlistComponent,
    ListitemComponent,
    CsvButtonComponent,
    InfoCardPopupComponent,
    InfoPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    ScrollingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
