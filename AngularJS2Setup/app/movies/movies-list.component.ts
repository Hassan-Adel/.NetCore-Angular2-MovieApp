import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "movies-list.component.html"
})

export class MoviesListComponent {
    WelcomeMessage: string = "Welcome to my site"
}