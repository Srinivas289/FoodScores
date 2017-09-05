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
 ScoreData :Score[] = [{"$id":"1","busid":9,"ins_date":"2016-01-20T00:00:00","ins_grade":"B","score":86,"name":"1 GOLF CLUB DR","address":"Golf Club Of Georgia Kitchen ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"86","ID":9},{"$id":"2","busid":9,"ins_date":"2015-06-24T00:00:00","ins_grade":"A","score":91,"name":"1 GOLF CLUB DR","address":"Golf Club Of Georgia Kitchen ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"91","ID":9},{"$id":"3","busid":9,"ins_date":"2014-12-22T00:00:00","ins_grade":"B","score":89,"name":"1 GOLF CLUB DR","address":"Golf Club Of Georgia Kitchen ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"89","ID":9},{"$id":"4","busid":9,"ins_date":"2014-06-20T00:00:00","ins_grade":"A","score":91,"name":"1 GOLF CLUB DR","address":"Golf Club Of Georgia Kitchen ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"91","ID":9},{"$id":"5","busid":9,"ins_date":"2013-11-12T00:00:00","ins_grade":"A","score":96,"name":"1 GOLF CLUB DR","address":"Golf Club Of Georgia Kitchen ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"96","ID":9},{"$id":"6","busid":10,"ins_date":"2015-08-20T00:00:00","ins_grade":"A","score":96,"name":"1 GOLF CLUB DR","address":"The Golf Club Of GA. Main Bar ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"96","ID":10},{"$id":"7","busid":10,"ins_date":"2014-06-23T00:00:00","ins_grade":"A","score":94,"name":"1 GOLF CLUB DR","address":"The Golf Club Of GA. Main Bar ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"94","ID":10},{"$id":"8","busid":10,"ins_date":"2014-04-25T00:00:00","ins_grade":"A","score":97,"name":"1 GOLF CLUB DR","address":"The Golf Club Of GA. Main Bar ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"97","ID":10},{"$id":"9","busid":11,"ins_date":"2016-02-09T00:00:00","ins_grade":"A","score":99,"name":"1 GOLF CLUB DR","address":"The Golf Club Of Georgia Men's Locker ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"99","ID":11},{"$id":"10","busid":11,"ins_date":"2015-03-17T00:00:00","ins_grade":"A","score":95,"name":"1 GOLF CLUB DR","address":"The Golf Club Of Georgia Men's Locker ","city":"ALPHARETTA","state":"GA","zip":30005,"lat":34.087256,"lng":-84.220046,"ins_Score":"95","ID":11}];
 start:number = 0;
 pageSize:number = 10;
 tempScore :Score[];
 storageName: string = 'health-scores-full-firstpage';
 constructor(private localService:LocalScoresService){}
 ngOnInit(): void {
     this.loadScores();
 }
 loadScores():void {
    let storeData = window.localStorage.getItem(this.storageName);
    if(storeData && storeData != 'undefined')
      {
        this.ScoreData = JSON.parse(window.localStorage.getItem(this.storageName));
      }
    //this.scoreService.getScoresData().subscribe(score => this.ScoreData=score.slice(1,this.start + this.pageSize));
    this.localService.getScoresData().subscribe(score => 
      {
        this.ScoreData = score.slice(this.start,this.pageSize);
        window.localStorage.setItem(this.storageName, JSON.stringify(this.ScoreData));
      });
    
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