import { Component } from "@angular/core";
import { MoviesListComponent } from "./movies/movie-list.component";

@Component({
    selector: "my-app",
    template: `<h1>{{WelcomeMessage}}</h1>
            <div>
            <mm-movies></mm-movies>
            </div>
            `,
    directives: [MoviesListComponent]
})

export class AppComponent {
WelcomeMessage: string = "Welcome to my site"
}