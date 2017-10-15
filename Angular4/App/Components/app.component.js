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
var core_2 = require("@angular/core");
var http_service_1 = require("./../http.service");
var filterParameters_1 = require("./../Models/filterParameters");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.selectedValue = "";
        //this.users = new Array<User>();
        //this.cities = new Array<string>();
        //this.userTasks = new Array<UserTask>();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getUsers().subscribe(function (data) { return _this.users = data.json(); });
        this.httpService.getCities().subscribe(function (data) { return _this.cities = data.json(); });
    };
    ;
    AppComponent.prototype.getUsersFiltred = function (name, city) {
        var _this = this;
        if (name === void 0) { name = ''; }
        if (city === void 0) { city = ''; }
        this.filter = new filterParameters_1.FilterParameters(name, city);
        this.httpService.getUsersFilter(this.filter).subscribe(function (data) { return _this.users = data.json(); });
    };
    ;
    AppComponent.prototype.getTasks = function (user) {
        var _this = this;
        this.selectedUser = user;
        this.httpService.getTasks(user.Id).subscribe(function (data) { return _this.userTasks = data.json(); });
    };
    return AppComponent;
}());
__decorate([
    core_2.ViewChild('readOnlyTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], AppComponent.prototype, "readOnlyTemplate", void 0);
__decorate([
    core_2.ViewChild('editTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], AppComponent.prototype, "editTemplate", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/Components/app.component.html',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map