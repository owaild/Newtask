import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, OneColumnComponent],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
  ],
  exports: [CommonModule,OneColumnComponent],
})
export class ThemeModule { }
