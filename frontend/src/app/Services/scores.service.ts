import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Score } from '../Interfaces/Score.js'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class ScoresService
{
    private kpiurl='http://rhsfiscores.azurewebsites.net/Scores/full';
    constructor(private http:Http){}
    getScoresData():Promise<Score[]> {
       return this.http.get(this.kpiurl).toPromise().then(res=> res.json() as Score[]).catch(this.handleError);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}