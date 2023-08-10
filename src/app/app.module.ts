import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProgressService } from './progress-service.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgressBarComponent,
    StartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 10000,
      progressBar: true,
      positionClass:'toast-bottom-right'
    }),
  ],
  providers: [ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
