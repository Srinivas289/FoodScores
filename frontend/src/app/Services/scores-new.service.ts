import {Injectable, OnInit} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Score , ZipScore } from '../Interfaces/Score.js'
import { Observable } from 'rxjs/observable'
import  'rxjs/add/operator/map'
import  'rxjs/add/operator/toPromise'
@Injectable()
export class NewScoresService implements OnInit
{
    private kpiurl='http://rhsfiscores.azurewebsites.net/Scores/full';
    constructor(private http:Http){}
    Scores : Score[];
    getScoresData(): Observable<Score[]> {
       return this.http.get(this.kpiurl).map(res=>res.json() as Score[]);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
    ngOnInit(){
        this.http.get(this.kpiurl).subscribe(res => this.Scores = <Score[]>res.json());
    }
}