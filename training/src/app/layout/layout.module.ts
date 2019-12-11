import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LayoutModule { }
