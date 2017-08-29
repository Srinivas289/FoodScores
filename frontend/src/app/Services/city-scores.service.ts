import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { CityScore } from '../Interfaces/Score.js'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class CityScoresService
{
    private cityscoreurl='http://rhsfiscores.azurewebsites.net/Scores/city';
    constructor(private http:Http){}
    getCityScoresData():Promise<CityScore[]> {
        return this.http.get(this.cityscoreurl).toPromise().then(res=>res.json() as CityScore[]).catch(this.handleError);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}