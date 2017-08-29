import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Score , ZipScore } from '../Interfaces/Score.js'
import  { Observable } from 'rxjs/observable'
@Injectable()
export class NewScoresService
{
    private kpiurl='http://rhsfiscores.azurewebsites.net/Scores/full';
    constructor(private http:Http){}
    getScoresData(): Observable<any> {
       return this.http.get(this.kpiurl);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}