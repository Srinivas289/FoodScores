import { Component,OnInit } from '@angular/core';
import { Score} from '../Interfaces/Score.js';
// import {ScoresService} from '../Services/scores.service.js';
import { NewScoresService} from '../Services/scores-new.service';
import { LocalScoresService} from '../Services/scores-local.service';
import { CamelCasePipe } from '../Pipes/camel-case.pipe';
@Component({
  selector: 'my-list',
  templateUrl: 'list.component.html',
  providers:[NewScoresService]
})
export class ListComponent implements OnInit { 
 ScoreData :Score[];
 start:number = 0;
 pageSize:number = 10;
 tempScore :Score[];
 constructor(private localService:LocalScoresService){}
 ngOnInit(): void {
     this.loadScores();
 }
 loadScores():void {
    //this.scoreService.getScoresData().subscribe(score => this.ScoreData=score.slice(1,this.start + this.pageSize));
    this.localService.getScoresData().subscribe(score => this.ScoreData = score.slice(this.start,this.pageSize));
 }
 loadMore():void {
  console.log('Load More button added');
  this.start+=this.pageSize;
  this.tempScore  = this.localService.scores.slice(this.start,this.start + this.pageSize);
  this.ScoreData =this.ScoreData.concat(this.tempScore);
}
loadAll():void{
  this.ScoreData = this.localService.scores;
}
}