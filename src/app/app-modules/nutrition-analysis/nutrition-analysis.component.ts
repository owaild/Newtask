import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-analysis',
  template: `
  <app-one-column> 
  <router-outlet></router-outlet>
  </app-one-column>
`
})
export class NutritionAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
