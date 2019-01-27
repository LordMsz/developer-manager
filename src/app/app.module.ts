import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageAComponent } from './components/multi-page/page-a/page-a.component';
import { HomeComponent } from './components/home/home.component';
import { PageBComponent } from './components/multi-page/page-b/page-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'multi-page',
    children: [
      {
        path: 'a',
        component: PageAComponent
      },
      {
        path: 'b',
        component: PageBComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    HomeComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
