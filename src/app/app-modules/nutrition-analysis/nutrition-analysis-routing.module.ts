import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetNutritionAnalysisComponent } from './get-nutrition-analysis/get-nutrition-analysis.component';
import { NutritionAnalysisComponent } from './nutrition-analysis.component';


const routes: Routes = [
  {
    path: '',
    component: NutritionAnalysisComponent,
    children: [
      {
        path: '',
        component: GetNutritionAnalysisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionAnalysisRoutingModule {}