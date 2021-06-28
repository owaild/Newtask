import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'NutritionAnalysis',
    loadChildren: () =>
      import('./app-modules/nutrition-analysis/nutrition-analysis.module').then((m) => m.NutritionAnalysisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
