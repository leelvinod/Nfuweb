import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

 
  title = 'nfuweb';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '700px',
              height: '400px',
              thumbnailsColumns: 8,
              imageAnimation: NgxGalleryAnimation.Slide,
              imageDescription: true 
                

          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: "./assets/b1.jfif",
              medium: './assets/b1.jfif',
              big: './assets/b1.jfif',
              description:'1 blah blah blah'
          },
          {
            small: "./assets/b2.jfif",
            medium: './assets/b2.jfif',
            big: './assets/b2.jfif',
            description:'2 blah blah blah'
        },
        {
          small: "./assets/b3.jfif",
          medium: './assets/b3.jfif',
          big: './assets/b3.jfif',
          description:'3 blah blah blah'
      },
      {
        small: "./assets/b4.jfif",
        medium: './assets/b4.jfif',
        big: './assets/b4.jfif',
        description:'4 blah blah blah'
    },
    {
      small: "./assets/b5.jfif",
      medium: './assets/b5.jfif',
      big: './assets/b5.jfif',
      description:'5 blah blah blah'
  },
  {
    small: "./assets/b6.jfif",
    medium: './assets/b6.jfif',
    big: './assets/b6.jfif',
    description:'6 blah blah blah'
},
{
  small: "./assets/b7.jpg",
  medium: './assets/b7.jpg',
  big: './assets/b7.jpg',
  description:'7 blah blah blah'
},
{
  small: "./assets/b8.jfif",
  medium: './assets/b8.jfif',
  big: './assets/b8.jfif',
  description:'8 blah blah blah'
},
{
  small: "./assets/b9.jfif",
  medium: './assets/b9.jfif',
  big: './assets/b9.jfif',
  description:'9 blah blah blah'
},
{
  small: "./assets/b10.jfif",
  medium: './assets/b10.jfif',
  big: './assets/b10.jfif',
  description:'10 blah blah blah'
},
{
  small: "./assets/b11.jfif",
  medium: './assets/b11.jfif',
  big: './assets/b11.jfif',
  description:'11 blah blah blah'
},
{
  small: "./assets/b12.jfif",
  medium: './assets/b12.jfif',
  big: './assets/b12.jfif',
  description:'12 blah blah blah'
}
      ];
  }
}
