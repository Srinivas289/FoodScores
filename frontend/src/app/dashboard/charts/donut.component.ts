import {Component} from '@angular/core'
import { CityScore } from '../../Interfaces/Score.js'
import {CityScoresService} from '../../Services/city-scores.service';
@Component({
    selector:'dash-chart-donut',
    templateUrl:'donut.component.html',
    providers:[CityScoresService]
})
export class DonutChartComponent
{
    CityScoreData : CityScore[] = [{"$id":"1","State":"GA","City":"JOHNS CREEK","Avg_Score":93},{"$id":"2","State":"GA","City":"ALPHARETTA","Avg_Score":93},{"$id":"3","State":"GA","City":"RIVERDALE","Avg_Score":94},{"$id":"4","State":"GA","City":"SANDY SPRINGS","Avg_Score":93},{"$id":"5","State":"GA","City":"CONYERS","Avg_Score":94},{"$id":"6","State":"GA","City":"FOREST PARK","Avg_Score":93},{"$id":"7","State":"GA","City":"DUNWOODY","Avg_Score":98},{"$id":"8","State":"GA","City":"ROSWELL","Avg_Score":93}];
    constructor(private cityService:CityScoresService){}
    ngOnInit(): void {
        this.loadZipScores();
    }
    loadZipScores():void {
        this.cityService.getCityScoresData().then(score=>this.CityScoreData = score);
     }
}