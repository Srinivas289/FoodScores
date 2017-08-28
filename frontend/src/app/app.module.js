"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_js_1 = require("./app.component.js");
var kpi_component_js_1 = require("./dashboard/kpi.component.js");
var notifications_component_js_1 = require("./dashboard/notifications.component.js");
var chat_component_js_1 = require("./dashboard/chat.component.js");
var timeline_component_js_1 = require("./dashboard/timeline.component.js");
var nav_left_component_js_1 = require("./dashboard/nav-left.component.js");
var nav_right_component_js_1 = require("./dashboard/nav-right.component.js");
var kpi_service_js_1 = require("./Services/kpi.service.js");
var topnav_component_js_1 = require("./dashboard/topnav.component.js");
var donut_component_js_1 = require("./dashboard/charts/donut.component.js");
var area_chart_component_js_1 = require("./dashboard/charts/area-chart.component.js");
var bar_chart_component_js_1 = require("./dashboard/charts/bar-chart.component.js");
var dashboard_component_js_1 = require("./dashboard/dashboard.component.js");
var list_component_js_1 = require("./list/list.component.js");
var charts_component_js_1 = require("./charts/charts.component.js");
var scores_service_js_1 = require("./services/scores.service.js");
var app_routing_js_1 = require("./app.routing.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_js_1.AppRoutingModule],
        declarations: [app_component_js_1.AppComponent, kpi_component_js_1.KPIComponent, notifications_component_js_1.NotificationsComponent, chat_component_js_1.ChatComponent, timeline_component_js_1.TimelineComponent, nav_left_component_js_1.NavLeftComponent,
            nav_right_component_js_1.NavRightComponent, topnav_component_js_1.TopNavComponent, donut_component_js_1.DonutChartComponent, area_chart_component_js_1.AreaChartComponent, bar_chart_component_js_1.BarChartComponent,
            dashboard_component_js_1.DashboardComponent, list_component_js_1.ListComponent, charts_component_js_1.ChartsComponent],
        bootstrap: [app_component_js_1.AppComponent],
        providers: [kpi_service_js_1.KPIService, scores_service_js_1.ScoresService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map