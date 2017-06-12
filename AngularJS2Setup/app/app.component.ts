import { Component } from "@angular/core";
import { MoviesListComponent } from "./movies/movie-list.component";
import { MovieService } from "./movies/movie.service";
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/RX'; //Load all features

@Component({
    selector: "my-app",
    template: `<h1>{{WelcomeMessage}}</h1>
            <div>
            <mm-movies></mm-movies>
            </div>
            `,
    directives: [MoviesListComponent],
    providers: [ MovieService, HTTP_PROVIDERS ]
})

export class AppComponent {
WelcomeMessage: string = "Welcome to my site"
}