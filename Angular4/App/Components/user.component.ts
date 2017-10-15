import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './../http.service';
import { User } from './../Models/user';
import { UserTask } from './../Models/userTask';
import { FilterParameters } from './../Models/filterParameters';

@Component({
    selector: 'my-app',
    templateUrl: './app/Components/user.component.html',
    providers: [HttpService]
})
export class UserComponent implements OnInit {
    userTasks: Array<UserTask>;
    users: Array<User>;
    cities: Array<string>;
    selectedCity: string = '';
    filter: FilterParameters;
    selectedUser: User;
    inputName: string = '';
    errorMessege: string;

    constructor(private httpService: HttpService) {
    }
    ngOnInit() {
        this.httpService.getUsers().subscribe((data: Response) => this.users = data.json(), err => this.errorMessege = "Oops,  data has not been loaded");
        this.httpService.getCities().subscribe((data: Response) => this.cities = data.json(), err => this.errorMessege = "Oops,  data has not been loaded");
       
    };

    setCity(city: string): void {
        this.selectedCity = city;
        this.getUsersFiltred();
    };

    getUsersFiltred(): void {
        this.filter = new FilterParameters(this.inputName, this.selectedCity);
        this.httpService.getUsersFilter(this.filter).subscribe((data: Response) => this.users = data.json(), err => this.errorMessege = "Oops, users have not been filtered");
    };

    getTasks(user: User): void {
        this.selectedUser = user;
        this.httpService.getTasks(user.Id).subscribe((data: Response) => this.userTasks = data.json(), err => this.errorMessege = "Oops,  data has not been loaded");
    }
}