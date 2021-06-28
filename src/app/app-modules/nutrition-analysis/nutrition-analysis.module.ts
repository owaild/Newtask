import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { NutritionAnalysisComponent } from './nutrition-analysis.component';
import { GetNutritionAnalysisComponent } from './get-nutrition-analysis/get-nutrition-analysis.component';
import { NutritionAnalysisRoutingModule } from './nutrition-analysis-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NutritionAnalysisComponent,
    GetNutritionAnalysisComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NutritionAnalysisRoutingModule
  ]
})
export class NutritionAnalysisModule { }
