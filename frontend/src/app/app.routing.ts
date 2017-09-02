import {NgModule} from '@angular/core'
import {RouterModule,Routes,RouterOutlet} from '@angular/router'
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import {ListComponent} from '../app/list/list.component'
import {ChartsComponent} from '../app/charts/charts.component'
import { LifeCycleComponent } from '../app/life-cycle/life-cycle.component'
import { ElementComponent } from '../app/element/element.component'
import { FormsComponent } from '../app/forms/forms.component'
const appRoutes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'list', component: ListComponent},
    {path:'charts', component:ChartsComponent},
    //{path:'forms', component:LifeCycleComponent},    
    {path:'element', component:ElementComponent},
    {path:'forms', component: FormsComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule,RouterOutlet]
})
export class AppRoutingModule
{}