import {Component,OnInit} from '@angular/core'
import {KPIService} from '../Services/kpi.service'
import {KPIDetail} from '../Interfaces/KPI.js'
@Component({
    selector:'dash-kpi',
    templateUrl:'kpi.component.html',
})
export class KPIComponent implements OnInit
{
    kpidetail:KPIDetail= {Total:80,ATotal:0,BTotal:0,CTotal:0};
    message:string="";
    storageName: string = 'health-scores-kpi';
    constructor(private kpiservice:KPIService){}
    getKPIDetail():void {
        let storeData = window.localStorage.getItem(this.storageName);
        if(storeData && storeData != 'undefined')
          {
            this.kpidetail = JSON.parse(window.localStorage.getItem(this.storageName));
          }
        this.kpiservice.getKPIData().then(kpi=>{
            this.kpidetail=kpi;
            window.localStorage.setItem(this.storageName, JSON.stringify(this.kpidetail));
        });
    }
    getMessage():void{
        this.message=this.kpiservice.getString();
    }
    ngOnInit():void {
        this.getKPIDetail();
        this.getMessage();
    }
}