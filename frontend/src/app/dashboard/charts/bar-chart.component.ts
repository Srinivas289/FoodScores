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
    ZipScoreData : ZipScore[] = [{"$id":"1","Zip":30002,"Avg_Score":84,"country_code":"US","Zipcode":"30002","place_name":"Avondale Estates","State":"Georgia","State_code":"GA","City":"DeKalb","admin_code2":"089","admin_name3":null,"admin_code3":null,"lat":33.771700,"lng":-84.260700,"accuracy":null},{"$id":"2","Zip":30004,"Avg_Score":93,"country_code":"US","Zipcode":"30004","place_name":"Alpharetta","State":"Georgia","State_code":"GA","City":"Fulton","admin_code2":"121","admin_name3":null,"admin_code3":null,"lat":34.112400,"lng":-84.302000,"accuracy":null},{"$id":"3","Zip":30005,"Avg_Score":94,"country_code":"US","Zipcode":"30005","place_name":"Alpharetta","State":"Georgia","State_code":"GA","City":"Fulton","admin_code2":"121","admin_name3":null,"admin_code3":null,"lat":34.078200,"lng":-84.228100,"accuracy":null},{"$id":"4","Zip":30009,"Avg_Score":95,"country_code":"US","Zipcode":"30009","place_name":"Alpharetta","State":"Georgia","State_code":"GA","City":"Fulton","admin_code2":"121","admin_name3":null,"admin_code3":null,"lat":34.077000,"lng":-84.303300,"accuracy":null},{"$id":"5","Zip":30012,"Avg_Score":94,"country_code":"US","Zipcode":"30012","place_name":"Conyers","State":"Georgia","State_code":"GA","City":"Rockdale","admin_code2":"247","admin_name3":null,"admin_code3":null,"lat":33.719200,"lng":-84.002100,"accuracy":null},{"$id":"6","Zip":30013,"Avg_Score":94,"country_code":"US","Zipcode":"30013","place_name":"Conyers","State":"Georgia","State_code":"GA","City":"Rockdale","admin_code2":"247","admin_name3":null,"admin_code3":null,"lat":33.643600,"lng":-83.968400,"accuracy":null},{"$id":"7","Zip":30021,"Avg_Score":99,"country_code":"US","Zipcode":"30021","place_name":"Clarkston","State":"Georgia","State_code":"GA","City":"DeKalb","admin_code2":"089","admin_name3":null,"admin_code3":null,"lat":33.810100,"lng":-84.238800,"accuracy":null}];
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