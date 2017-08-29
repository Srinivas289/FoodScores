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
    CityScoreData : CityScore[] = [];
    constructor(private cityService:CityScoresService){}
    ngOnInit(): void {
        this.loadZipScores();
    }
    loadZipScores():void {
        this.cityService.getCityScoresData().then(score=>this.CityScoreData = score);
     }
}