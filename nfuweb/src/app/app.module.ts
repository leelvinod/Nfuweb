import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';
import { News3Component } from './news3/news3.component';
import { NewslistComponent } from './newslist/newslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmissionComponent,
    News1Component,
    News2Component,
    News3Component,
    NewslistComponent,
  ],
  imports: [
    NgxGalleryModule,
    BrowserModule,
    AppRoutingModule,
    
    NgbModule, BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
