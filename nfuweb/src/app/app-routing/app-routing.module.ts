import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import {News1Component} from '../news1/news1.component';
import {News2Component} from '../news2/news2.component';
import {News3Component} from '../news3/news3.component';
import {NewslistComponent} from '../newslist/newslist.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        
    },
    {
        path:'news1',
        component: News1Component,
    },
    {
        path:'news2',
        component: News2Component,
    },
    {
        path:'news3',
        component: News3Component,
    },
    {
        path:'newslist',
        component:NewslistComponent,

    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
