import {NgModule} from '@angular/core'
import {RouterModule,Routes,RouterOutlet} from '@angular/router'
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import {ListComponent} from '../app/list/list.component'
import {ChartsComponent} from '../app/charts/charts.component'
import { LifeCycleComponent } from '../app/life-cycle/life-cycle.component'
import { ElementComponent } from '../app/element/element.component'
const appRoutes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'list', component: ListComponent},
    {path:'charts', component:ChartsComponent}    ,
    {path:'forms', component:LifeCycleComponent}    ,
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'element', component:ElementComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule,RouterOutlet]
})
export class AppRoutingModule
{}