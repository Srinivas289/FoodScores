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
var scores_service_js_1 = require("../Services/scores.service.js");
var ListComponent = (function () {
    function ListComponent(scoreService) {
        this.scoreService = scoreService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadScores();
    };
    ListComponent.prototype.loadScores = function () {
        var _this = this;
        this.scoreService.getScoresData().then(function (score) { return _this.ScoreData = score; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-list',
        templateUrl: './Node/app/list/list.component.html',
        providers: [scores_service_js_1.ScoresService]
    }),
    __metadata("design:paramtypes", [scores_service_js_1.ScoresService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map