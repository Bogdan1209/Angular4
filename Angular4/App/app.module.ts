import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './Components/user.component';
import { TaskComponent } from './Components/task.component';
import { PhoneNumberPipe } from './phoneNumber.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [UserComponent, TaskComponent, PhoneNumberPipe],
    bootstrap: [UserComponent]
})
export class AppModule {
}