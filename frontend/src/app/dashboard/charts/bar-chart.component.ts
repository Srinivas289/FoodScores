import {Component , OnInit} from '@angular/core'
import { ZipScore , Score } from '../../Interfaces/Score.js'
import {ZipScoresService} from '../../Services/zipscores.service';
@Component({
    selector:'dash-chart-bar',
    templateUrl:'bar-chart.component.html',
    providers:[ZipScoresService]
})
export class BarChartComponent  implements OnInit
{
    ZipScoreData : ZipScore[] = [];
    start:number = 1;
    pageSize:number = 5;
    constructor(private scoreService:ZipScoresService){}
    ngOnInit(): void {
        this.loadZipScores();
    }
    loadZipScores():void {
        this.scoreService.getZipScoresData().then(score=>this.ZipScoreData = score.slice(1,this.start + this.pageSize));
     }
    loadMore():void {
        this.start+=this.pageSize;
        this.loadZipScores();
    }
}