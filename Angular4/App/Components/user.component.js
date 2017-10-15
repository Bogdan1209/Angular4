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
var http_service_1 = require("./../http.service");
var filterParameters_1 = require("./../Models/filterParameters");
var UserComponent = (function () {
    function UserComponent(httpService) {
        this.httpService = httpService;
        this.selectedCity = '';
        this.inputName = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getUsers().subscribe(function (data) { return _this.users = data.json(); }, function (err) { return _this.errorMessege = "Oops,  data has not been loaded"; });
        this.httpService.getCities().subscribe(function (data) { return _this.cities = data.json(); }, function (err) { return _this.errorMessege = "Oops,  data has not been loaded"; });
    };
    ;
    UserComponent.prototype.setCity = function (city) {
        this.selectedCity = city;
        this.getUsersFiltred();
    };
    ;
    UserComponent.prototype.getUsersFiltred = function () {
        var _this = this;
        this.filter = new filterParameters_1.FilterParameters(this.inputName, this.selectedCity);
        this.httpService.getUsersFilter(this.filter).subscribe(function (data) { return _this.users = data.json(); }, function (err) { return _this.errorMessege = "Oops, users have not been filtered"; });
    };
    ;
    UserComponent.prototype.getTasks = function (user) {
        var _this = this;
        this.selectedUser = user;
        this.httpService.getTasks(user.Id).subscribe(function (data) { return _this.userTasks = data.json(); }, function (err) { return _this.errorMessege = "Oops,  data has not been loaded"; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/Components/user.component.html',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map