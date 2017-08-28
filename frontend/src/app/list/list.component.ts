import { Component,OnInit } from '@angular/core';
import {Score} from '../Interfaces/Score.js'
import {ScoresService} from '../Services/scores.service.js'
@Component({
  selector: 'my-list',
  templateUrl: 'list.component.html',
  providers:[ScoresService]
})
export class ListComponent implements OnInit { 
 ScoreData :Score[];
 constructor(private scoreService:ScoresService){}
 ngOnInit(): void {
     this.loadScores();
 }
 loadScores():void {
    this.scoreService.getScoresData().then(score => this.ScoreData=score);
 }
}