import { Component,OnInit } from '@angular/core';
import {Score} from '../Interfaces/Score.js';
// import {ScoresService} from '../Services/scores.service.js';
import {NewScoresService} from '../Services/scores-new.service';
@Component({
  selector: 'my-list',
  templateUrl: 'list.component.html',
  providers:[NewScoresService]
})
export class ListComponent implements OnInit { 
 ScoreData :Score[];
 constructor(private scoreService:NewScoresService){}
 ngOnInit(): void {
     this.loadScores();
 }
 loadScores():void {
    //this.scoreService.getScoresData().then(score => this.ScoreData=score);
    this.scoreService.getScoresData().subscribe(score => this.ScoreData=<Score[]>score.json().slice(1,15));
 }
}