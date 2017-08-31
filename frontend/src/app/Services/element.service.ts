import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import { Element } from '../Interfaces/Score.js'
import  { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/toPromise'
import  'rxjs/add/operator/map'
@Injectable()
export class ElementService
{
    private url='http://localhost:56061/element/data';
    //private kpiurl='/src/app/data.json';
    constructor(private http:Http){}
    getElementData():Observable<Element[]> {
        return this.http.get(this.url).map(res=>res.json() as Element[]);
    }
    getString():string{
        return "";
    }
    handleError(error:any): Promise<any> {
        console.log('Error Occurred: ',error);
        return Promise.reject(error.message || error);
    }
}