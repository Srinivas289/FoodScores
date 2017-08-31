import { NgModule, enableProdMode , OnInit}      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router'
import { AppComponent }  from '../app/app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { KPIComponent } from '../app/dashboard/kpi.component';
import { NotificationsComponent } from '../app/dashboard/notifications.component'
import { ChatComponent } from '../app/dashboard/chat.component'
import { TimelineComponent } from '../app/dashboard/timeline.component'
import { NavLeftComponent } from '../app/dashboard/nav-left.component'
import { NavRightComponent } from '../app/dashboard/nav-right.component'
import {KPIService} from '../app/Services/kpi.service'
import { TopNavComponent } from '../app/dashboard/topnav.component'
import { DonutChartComponent } from '../app/dashboard/charts/donut.component'
import { AreaChartComponent } from '../app/dashboard/charts/area-chart.component'
import { BarChartComponent } from '../app/dashboard/charts/bar-chart.component'
import { ListComponent } from '../app/list/list.component'
import { ChartsComponent } from '../app/charts/charts.component'
import { ScoresService } from '../app/Services/scores.service'
import { ZipScoresService } from '../app/Services/zipscores.service'
import { CityScoresService } from '../app/Services/city-scores.service'
import { NewScoresService } from '../app/Services/scores-new.service'
import { AreaChartComponent1 } from '../app/Charts/area-chart/area-chart.component'
import { AppRoutingModule} from '../app/app.routing';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'
import { FormsModule } from '@angular/forms';
import { ElementComponent } from './element/element.component'
import { ElementService } from '../app/Services/element.service'
@NgModule({
  imports:      [ BrowserModule,HttpModule,AppRoutingModule,FormsModule ],
  declarations: [ AppComponent,DashboardComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                  NavRightComponent,TopNavComponent,DonutChartComponent,AreaChartComponent,BarChartComponent,
                  ListComponent,ChartsComponent,AreaChartComponent1, LifeCycleComponent, ElementComponent ],
  bootstrap:    [ AppComponent],
  providers:    [KPIService,ScoresService,ZipScoresService,CityScoresService,NewScoresService,ElementService]
})
export class AppModule implements OnInit { 
  ngOnInit(){
     enableProdMode();
  }
}