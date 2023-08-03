import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    { path: 'main', component: HeaderComponent, title: 'მთავარი' },
    { path: 'profile', component: MainPageComponent, title: 'cart' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
  