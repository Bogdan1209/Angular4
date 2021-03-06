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
var user_1 = require("./../Models/user");
var http_service_1 = require("./../http.service");
var TaskComponent = (function () {
    function TaskComponent(httpService) {
        this.httpService = httpService;
    }
    TaskComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.httpService.deleteTask(task).subscribe(function (data) { return _this.userTasks = data.json(); }, function (err) { return _this.errorMessege = "Oops, something wrong"; });
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], TaskComponent.prototype, "selectedUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TaskComponent.prototype, "userTasks", void 0);
TaskComponent = __decorate([
    core_1.Component({
        selector: 'task-detail',
        templateUrl: './app/Components/task.component.html',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map