import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageAComponent } from './components/multi-page/page-a/page-a.component';
import { HomeComponent } from './components/home/home.component';
import { PageBComponent } from './components/multi-page/page-b/page-b.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { DeveloperTableComponent } from './components/developer-list/developer-table/developer-table.component';
import { DeveloperService } from './services/developer/developer.service';
import { DeveloperEditorComponent } from './components/developer-editor/developer-editor.component';

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
  },
  {
    path: 'developer',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: DeveloperListComponent,
        resolve: {
          developers: DeveloperService
        }
      },
      {
        path: 'add',
        component: DeveloperEditorComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    HomeComponent,
    PageBComponent,
    DeveloperListComponent,
    DeveloperTableComponent,
    DeveloperEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
