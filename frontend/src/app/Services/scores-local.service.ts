import {Injectable, OnInit} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Score , ZipScore } from '../Interfaces/Score.js'
import { Observable } from 'rxjs/observable'
import  'rxjs/add/operator/map'
import  'rxjs/add/operator/toPromise'
@Injectable()
export class LocalScoresService
{
    private kpiurl='http://rhsfiscores.azurewebsites.net/Scores/full';
    scores : Score[] ;
    constructor(private http:Http){
        this.http.get(this.kpiurl).map(res=>res.json() as Score[]).subscribe(resp => this.scores=resp);
    }
    getScoresData(): Observable<Score[]> {
        return this.http.get(this.kpiurl).map(res=>res.json() as Score[]);
    }
}