import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { User } from './../Models/user';
import { UserTask } from './../Models/userTask';
import { HttpService } from './../http.service';

@Component({
    selector: 'task-detail',
    templateUrl: './app/Components/task.component.html',
    providers: [HttpService]
})

export class TaskComponent {
    @Input() selectedUser: User;
    @Input() userTasks: Array<UserTask>;
    errorMessege: string;
    constructor(private httpService: HttpService) {
    }

    deleteTask(task: UserTask) {
        this.httpService.deleteTask(task).subscribe((data: Response) => this.userTasks = data.json(),err => this.errorMessege = "Oops, something wrong");
    }
}