import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { KPIDetail } from '../Interfaces/KPI.js'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class KPIService
{
    //private kpiurl='http://rhsfiscores.azurewebsites.net/dashboard/kpi';
    private kpiurl='/src/app/data.json';
    constructor(private http:Http){}
    getKPIData():Promise<KPIDetail> {
       return this.http.get(this.kpiurl).toPromise().then(res=> res.json() as KPIDetail).catch(this.handleError);
    }
    getString():string{
        return "";
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}