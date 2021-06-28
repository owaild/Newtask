import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAnalysisNutrition } from '../interfaces/ianalysis-nutrition';

@Injectable({
  providedIn: 'root',
})
export class NutritionAnalysisService {

 


  constructor(
    private http: HttpClient,
  ) {
  }
  app_id:string='47379841'
  app_key:string='d28718060b8adfd39783ead254df7f92'
  urlDetail= "nutrition-details";

  getAnalysis(data :any){
    let httpParams = new HttpParams();
    httpParams=httpParams.append('app_id', this.app_id);
    httpParams=httpParams.append('app_key', this.app_key);
    return this.http.post<IAnalysisNutrition>(environment.ApiBaseUrl+this.urlDetail + '?' + httpParams,data);
}


 
}
