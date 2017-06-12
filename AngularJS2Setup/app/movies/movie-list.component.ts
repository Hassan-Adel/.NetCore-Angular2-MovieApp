import { Component, OnInit } from "@angular/core";
import { IMovie } from "./movie";
import { MovieFilterPipe } from './movie-filter.pipe';
import { ReviewComponent } from '../shared/review.component';
import { MovieService } from "./movie.service";

@Component({
    moduleId: module.id,
    selector: "mm-movies",
    templateUrl: "movie-list.component.html",
    styleUrls: ["movie-list.component.css"],
    pipes: [MovieFilterPipe],
    directives: [ReviewComponent ]
})

export class MoviesListComponent implements OnInit {
    pageTitle: string = "Movies List";
    imageWidth: number = 50;
    imaegMargin: number = 2;
    showPoster: boolean = true;
    listFilter: string;
    errorMessage: string;

    movies: IMovie[];

    constructor(private _movieService: MovieService) { }

    toggleImage(): void {
        this.showPoster = !this.showPoster;
    }

    ngOnInit(): void {
        this._movieService.getMovies()
            .subscribe(myMovies => this.movies = myMovies,
            error => this.errorMessage = <any>error);
        console.log('Invoked : ngOnInit');
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie List : ' + message;
    }
}