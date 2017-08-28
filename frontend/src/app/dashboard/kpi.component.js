"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var kpi_service_js_1 = require("../Services/kpi.service.js");
var KPIComponent = (function () {
    function KPIComponent(kpiservice) {
        this.kpiservice = kpiservice;
        this.kpidetail = { Total: 80, ATotal: 0, BTotal: 0, CTotal: 0 };
        this.message = "";
    }
    KPIComponent.prototype.getKPIDetail = function () {
        var _this = this;
        this.kpiservice.getKPIData().then(function (kpi) { return _this.kpidetail = kpi; });
    };
    KPIComponent.prototype.getMessage = function () {
        this.message = this.kpiservice.getString();
    };
    KPIComponent.prototype.ngOnInit = function () {
        this.getKPIDetail();
        this.getMessage();
    };
    return KPIComponent;
}());
KPIComponent = __decorate([
    core_1.Component({
        selector: 'dash-kpi',
        templateUrl: './Node/app/dashboard/kpi.component.html',
    }),
    __metadata("design:paramtypes", [kpi_service_js_1.KPIService])
], KPIComponent);
exports.KPIComponent = KPIComponent;
//# sourceMappingURL=kpi.component.js.map