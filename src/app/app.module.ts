import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  matSortAnimations,
  MatSortModule,
  MatTable,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
