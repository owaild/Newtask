import { Component, OnInit } from '@angular/core';
import { IAnalysisNutrition } from 'src/app/@AppService/interfaces/ianalysis-nutrition';
import { NutritionAnalysisService } from 'src/app/@AppService/services/nutrition-analysis.service';

@Component({
  selector: 'app-get-nutrition-analysis',
  templateUrl: './get-nutrition-analysis.component.html',
  styleUrls: ['./get-nutrition-analysis.component.scss']
})
export class GetNutritionAnalysisComponent implements OnInit {
  ingredient:string='';
  showTotal:boolean=false
  showNutrition:boolean=false
  analysis:IAnalysisNutrition={
    ingredients:[],

   
  };
  constructor(private NutritionAnalysis:NutritionAnalysisService) { }

  ngOnInit(): void {
  }
  getAnalyse(){
    if (this.ingredient!=='') {
    let list=  this.ingredient.split(/\n/).filter((word) => word.length > 0)
      this.NutritionAnalysis.getAnalysis({ingr:list}).subscribe(
        res=>{
          this.analysis=res;
          console.log(this.analysis);
        
        },error=>{
          console.log(error);
        }
      )
    }
    
  }
}
