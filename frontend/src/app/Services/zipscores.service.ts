import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { ZipScore } from '../Interfaces/Score.js'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class ZipScoresService
{
    private zipscoreurl='http://rhsfiscores.azurewebsites.net/Scores/zip';
    constructor(private http:Http){}
    getZipScoresData():Promise<ZipScore[]> {
        return this.http.get(this.zipscoreurl).toPromise().then(res=>res.json() as ZipScore[]).catch(this.handleError);
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}