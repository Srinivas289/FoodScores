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
    storageName:string = 'health-scores-zip-firstpage';
    constructor(private scoreService:ZipScoresService){}
    ngOnInit(): void {
        this.loadZipScores();
    }
    loadZipScores():void {
        let storeData = window.localStorage.getItem(this.storageName) ;
        if(storeData && storeData!= 'undefined')
            {
              this.ZipScoreData = JSON.parse(storeData);
            }
        this.scoreService.getZipScoresData().then(score=>{
            this.ZipScoreData = score.slice(1,this.start + this.pageSize);
            window.localStorage.setItem(this.storageName, JSON.stringify(this.ZipScoreData));
        });
     }
    loadMore():void {
        this.start+=this.pageSize;
        this.loadZipScores();
    }
}