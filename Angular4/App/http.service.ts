import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { FilterParameters } from './Models/filterParameters';
import { UserTask } from './Models/userTask';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    getUsersFilter(filter: FilterParameters){
        let body = JSON.stringify(filter);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('/api/users/GetUsers/', body, { headers: headers });
    }

    getUsers() {
        return this.http.get('/api/users/GetUsers');
    }

    getCities() {
        return this.http.get('/api/users/GetCities');
    }

    getTasks(userId: number) {
        return this.http.get('/api/tasks/GetTasks/' + userId);
    }

    deleteTask(task: UserTask) {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('/api/tasks/DeleteTask', body, { headers: headers });
    }
}