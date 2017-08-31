import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Score , ZipScore } from '../Interfaces/Score.js'
import  { Observable } from 'rxjs/observable'
import {} from 'rxjs/add/operator/map'
@Injectable()
export class NewScoresService
{
    private kpiurl='http://rhsfiscores.azurewebsites.net/Scores/full';
    constructor(private http:Http){}
    getScoresData(): Observable<Score[]> {
       return this.http.get(this.kpiurl).map(res=>res.json() as Score[]);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}