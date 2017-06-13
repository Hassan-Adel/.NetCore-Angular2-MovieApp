import { Component } from "@angular/core";


@Component({
    selector: "my-app",
    template: `
                <div>
                    <nav class='navbar navbar-default'>
                        <div class='container-fluid'>
                            <a class='navbar-brand'>{{pageTitle}}</a>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['welcome']">Home</a></li>
                                <li><a [routerLink]="['movies']">Movie List</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                 </div>
                `
})

export class AppComponent {
    welcomeMessage: string = "Welcome to My .NET Angular 2 project!!";
    pageTitle: string = "The Premiere Movie Database";
}